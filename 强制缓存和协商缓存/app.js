const http = require('http');
const fs = require('fs');
const url = require('url');




http.createServer((req, res ) => {
    const {pathname} = url.parse(req.url);
    if(pathname === '/') {
        const data = fs.readFileSync('./index.html');
        res.end(data);
    } else if(pathname === '/img/1.jpg') {
        const data = fs.readFileSync('./img/1.jpg');
        res.end(data);
    } else {
        res.statusCode = 404
        res.end()
    }
}).listen(3000, () => {
    console.log('http://localhost:3000');
})