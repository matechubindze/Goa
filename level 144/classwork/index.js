const hello = require("http");

const server = hello.createServer((req, res) => {
    res.end(req.url);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
