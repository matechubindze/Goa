const http = require('http');

const arr = [];

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

        if (arr.length === 0) {
        res.statusCode = 204;
        return res.end();
        }

        res.statusCode = 200;
        res.end(JSON.stringify(arr));

    } else {
        res.statusCode = 405;
        res.end();
    }

});

server.listen(3000);
