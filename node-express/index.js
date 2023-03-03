import express from "express";
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req,res, next) => {
    console.log('GET Request');
    res.send('привіт!');
    // next();
})

app.listen(PORT, () => {
    console.log(`Слухаю порт ${PORT}`)
});
