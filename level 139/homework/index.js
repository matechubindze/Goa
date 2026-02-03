const os = require("os");

console.log(process.platform);

process.argv.slice(2).forEach(arg => console.log(arg));

console.log(os.type());
console.log(os.release());

console.log(os.totalmem());
console.log(os.freemem());

console.log(os.homedir());

console.log(os.uptime());

console.log("normal message");
console.warn("warning message");
console.error("error message");

const data = {
    platform: os.platform(),
    cpu: os.cpus()[0].model,
    memory: os.totalmem()
};

console.table(data);
