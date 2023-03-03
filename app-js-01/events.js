const Emitter = require('events');

const emitter = new Emitter();
let i =0;

const callback1 = (data, second) => {
    i++;
    console.log(`callback1 вы прислали сообщение ${data} ${i}`);
}

const callback2 = (data, second) => {
    i++;
    console.log(`callback2 сообщение ${data} ${i}`);
}

emitter.on('message', callback1)
emitter.on('message', callback2)
emitter.once('message1', callback1);

const MESSAGE = process.env.message || '';

if(MESSAGE) {
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 'сообщение не указано');
}

emitter.emit('message', 'emitted!');
emitter.emit('message1', 'emitted! ONCE');
emitter.emit('message1', 'emitted! ONCE2');
emitter.emit('message', 'emitted!');
emitter.emit('message', 'emitted!');
emitter.emit('message1', 'emitted! ONCE3');

emitter.removeListener('message', callback1);

emitter.emit('message', 'emitted!');
emitter.emit('message', 'emitted!');
emitter.emit('message', 'emitted!');

emitter.removeAllListeners('message');

emitter.emit('message', 'emitted!');
emitter.emit('message', 'emitted!');
