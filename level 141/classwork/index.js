const http = require("http");

const server = http.createServer((req, res) => {
    res.end("mate");
});

server.listen(3000, () => {
    console.log("server runningd");
});
