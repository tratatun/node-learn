module.exports = class Router {
    constructor() {
        // endpoints:
        // {
        //     '/users':{
        //         'GET': (req,res) => {},
        //         'POST': (req,res) => {}
        //     },
        //     '/posts': {
        //         'GET': (req,res) => {}
        //     }
        // }
        this.endpoints = {};
    }

    request (method = 'GET', path, haldler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {};
        }

        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error(`Method ${method} за адрессою ${path} вже існує!`);
        }

        endpoint[method] = haldler;

    }

    get(path, handler) {
        return this.request('GET', path, handler);
    }

    post(path, handler) {
        return this.request('POST', path, handler);
    }

    put(path, handler) {
        return this.request('PUT', path, handler);
    }

    delete(path, handler) {
        return this.request('DELETE', path, handler);
    }
}
