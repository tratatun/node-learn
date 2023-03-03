// Readable - чтение
// Writable - запись
// Duplex - чтение и запись
// Transform - тоже что и  Duplex но может изменять данные по мере чтения

const fs = require('fs');

const path = require('path');

// fs.readFile(path.resolve(__dirname, 'text-streams.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// })
////////////////

// const stream = fs.createReadStream(path.resolve(__dirname, 'text-streams.txt'), {encoding:'utf8'});

// stream.on('data', (chunk)=> {
//     console.log(chunk);
// });

// stream.on('open', (chunk)=> {
//     console.log('Начали читать '+ chunk);
// });

// stream.on('end', (chunk)=> {
//     console.log('Закончили читать '+ chunk);
// });
// ////////////

// const stream = fs.createWriteStream(path.resolve(__dirname, 'text-streams2.txt'));//, {encoding: 'utf8'});

// for (let i = 0; i < 20; i++) {
//     stream.write(i+'\n');
// }

// stream.end();
// // stream.close();
// // stream.destroy();
////////////////////////

const http = require('http');

http.createServer((req, res) => {
    const stream = fs.createReadStream(path.resolve(__dirname, 'text-stream.txt'));
    stream.on('data', chunk => res.write(chunk)); // при считывании из файла, записываем кусок в поток
    // stream.on('end', chunk => res.end()) // !!! потенциальная ошибка, поток из файла закроется ДО того как будет отправлены данные в поток res
    stream.pipe(res); // pipe помогает закрыть один поток только когда закрыт (прочитан) другой, переданый как параметер
});