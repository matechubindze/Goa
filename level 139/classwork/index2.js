const os = require("os");
const process = require("process");

const info = {
    uptime: os.uptime(),
    operatingSystem: os.platform(),
    hostname: os.hostname(),
    fileAbsolutePath: process.argv[1],
    networkInterfaces: os.networkInterfaces()
};

console.log(info);
