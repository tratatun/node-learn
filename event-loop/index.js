function log(val) {
    console.log(val);
}

log('1');

setTimeout(() => {
    log('setTimeout 1');
    Promise.resolve().then(() => {
        log('promise setTimeout');
    });
    queueMicrotask(() => {
        log('queueMicrotask setTimeout 1');
    });
    queueMicrotask(() => {
        log('queueMicrotask setTimeout 2');
    });
        
}, 0);

setTimeout(() => {
    log('setTimeout 2');
}, 0);

queueMicrotask(() => {
    log('queueMicrotask 1');
});

Promise.resolve().then(() => {
    log('promise 1');
});

queueMicrotask(() => {
    log('queueMicrotask 2');
});

Promise.resolve().then(() => {
    log('promise 2');
});

log('4');

// 1
// 4
// promise 1
// promise 2
// settimeout 1
// promise setTimeout
// setTimeout 2