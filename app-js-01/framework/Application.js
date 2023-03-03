const http = require('http');
const Emitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new Emitter();
        this.server = this._createServer();
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path =>{
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method];

                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    console.log('emited '+path +' '+ method)
                    handler(req, res);
                });
            })
        })
    }

    _createServer() {
        return http.createServer((req,res) => {
            let data = '';

            req.on('data', (chunk) => {
                data += chunk;
            });

            req.on('end', () => {
                if(data) {
                    req.body = JSON.parse(data);
                }

                this.middlewares.forEach(middleware => middleware(req, res));
// console.log(req.pathname)
                const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res);

                if(!emitted){
                    res.writeHead(200, {
                        'Content-type': 'text/html; charset=utf8'
                    });
                    res.write('кис кис кис кис');
                    res.end();
                }
            })

        })
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }

    listen(port, callback){
        this.server.listen(port, callback);
    }
}