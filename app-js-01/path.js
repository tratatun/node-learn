const path = require('path');

// склеить участки пути
console.log(path.join(__filename));
console.log(path.join(__filename, '..'));
console.log(path.join(__dirname, '..','..'));
console.log(path.join('first','sec','third','..'));

// получить абсолютный путь
console.log(path.resolve('first', 'seco'));