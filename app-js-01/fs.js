const fs = require('fs');

const path = require('path');

// const dotenv = require('dotenv');

// dotenv.config();

// // fs.mkdirSync(path.resolve(__dirname, 'dirr1', 'dir2', 'dir3'), {recursive:true});

// console.log('start');
// fs.mkdir(path.resolve(__dirname, 'dirr1'), (err)=> {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Паппка создана1!12!"ґґҐ');
// });
// console.log('end');


// fs.rmdir(path.resolve(__dirname, 'dirr1'), (err)=> {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Паппка удалена');
// })

/////// FILES

// fs.writeFile(path.resolve(__dirname, 'text12.txt'), 'Старт вайла\nПааагналиии!\n', err => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     fs.appendFile(path.resolve(__dirname, 'text12.txt'), 'ads ddas \n teext\t123', err => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log('файл записан!');
//     });
//     console.log('файл записан!');
// });
//path.resolve(__dirname,'text123.txt'), 'begining of file WOOOHOO!\ngo go go\n'
//path.resolve(__dirname,'text123.txt'), 'append test123\n'

const writeFileAsync = async (path,data) => {
    return new Promise((res,rej) => fs.writeFile(path,data, (err) => {
        if(err){
            return rej('err 0: ' + err.message);
        }
        res(data);
    }));
};


const appendFileAsync = async (path,data) => {
    return new Promise((res,rej) => {
        fs.appendFile(path, data, (err) => {
            if(err){
                return rej('err 1: ' + err.message);
            }
            res(data+' promise text');
        })
    });
};

// writeFileAsync(path.resolve(__dirname,'text123.txt'), 'begining of file WOOOHOO!\ngo go go\n')
//     .then(()=> appendFileAsync(path.resolve(__dirname,'text123.txt'), 'append test123\n'))
//     .then(()=> appendFileAsync(path.resolve(__dirname,'text123.txt'), 'append test 567\n'))
//     .then(()=> appendFileAsync(path.resolve(__dirname,'text123.txt'), 'append test 6345 2345234\n'))
//     .catch(err => console.log('errorr: '+ err));

// async function wrap (){
//     const res = await appendFileAsync(path.resolve(__dirname,'text123.txt'), 'new\n');

//     console.log(res);
// }

// wrap();

const readFileAsync = async (path) => {
    return new Promise((res,rej) => {
        fs.readFile(path, {encoding: 'utf8'}, (err, data) => {
            if(err){
                return rej('err read: ' + err.message);
            }
            res(data);
        })
    });
};

const removeFileAsync = async (path) => {
    return new Promise((res,rej) => {
        fs.rm(path, (err) => {
            if(err){
                return rej('err read: ' + err.message);
            }
            res();
        })
    });
};

// writeFileAsync(path.resolve(__dirname,'text123.txt'), 'begining of file WOOOHOO!\ngo go go\n')
//     .then(()=> appendFileAsync(path.resolve(__dirname,'text123.txt'), 'append test123\n'))
//     .then(()=> appendFileAsync(path.resolve(__dirname,'text123.txt'), 'append test 567\n'))
//     .then(()=> appendFileAsync(path.resolve(__dirname,'text123.txt'), 'append test 6345 2345234\n'))
//     .then(() => readFileAsync(path.resolve(__dirname,'text123.txt')))
//     .then(data=>console.log('FILE: \n' + data))
//     .catch(err => console.log('errorr: '+ err));

// removeFileAsync(path.resolve(__dirname,'text123.txt')).then(()=>console.log('file removed'));

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(()=>readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data=> {
        return writeFileAsync(path.resolve(__dirname, 'count.txt'),''+data.split(' ').length)
    })
    .then(()=>removeFileAsync(path.resolve(__dirname, 'text.txt')));