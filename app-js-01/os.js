const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
const cpus = os.cpus();

if(cluster.isMaster){
    for (let i = 0; i < cpus.length-1; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`воркер с pid = ${worker.process.pid} умер`);
        cluster.fork();
    });
} else {
    console.log(`воркер с pid=${process.pid} запущен`);
    setInterval(()=> {
        console.log(`воркер с pid=${process.pid} еще работает`);
    }, 5000);
}



console.log(process.pid + ' END');

