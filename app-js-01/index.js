const userRouter = require('./src/user-router');
const Application = require('./framework/Application');
const mongoose = require('mongoose');
const jsonParserMiddleware = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const PORT = process.env.PORT || 5000;

const app = new Application();


app.addRouter(userRouter);
app.use(jsonParserMiddleware);
app.use(parseUrl('http://localhost:'+PORT));

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:root@cluster0.5zgjlfn.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, ()=>console.log('Server started on port - ' + PORT));
    } catch (error) {
        console.log(error);
    }
};

start();
