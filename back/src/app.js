const http = require('http')

let k = 0;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({count: k}));
    res.end();
    k += 1;
}).listen(8080);
