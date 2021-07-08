const http = require("http");
const fs = require("fs");
const url = require("url");

// 强制缓存
http
  .createServer((req, res) => {

    const { pathname } = url.parse(req.url);
    if (pathname === "/") {
      const data = fs.readFileSync("./index.html");
      res.end(data);
    } else if (pathname === "/img/1.jpg") {
      const data = fs.readFileSync("./img/1.jpg");
      res.end(data);
    } else if (pathname === "/img/2.png") {
      const data = fs.readFileSync("./img/2.png");
      res.end(data);
    } else if (pathname === "/img/3.jpg") {
     
      const {mtime} = fs.statSync('./img/3.jpg');
      const ifModifiedSince = req.headers['if-modified-since'];
      console.log(ifModifiedSince, 'ifModifiedSince');
      
      if(ifModifiedSince === mtime.toUTCString()) {
          res.statusCode = '304';
          res.end();
          return;
      } 
      const data = fs.readFileSync("./img/3.jpg");
      res.setHeader('last-modified', mtime.toUTCString());
      res.setHeader('Cache-Control', 'no-cache');
      res.end(data);
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
