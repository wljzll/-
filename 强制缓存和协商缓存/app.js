const http = require("http");
const fs = require("fs");
const url = require("url");

// 强制缓存
http
  .createServer((req, res) => {
    console.log(req.method, req.url);
    const { pathname } = url.parse(req.url);
    if (pathname === "/") {
      const data = fs.readFileSync("./index.html");
      res.end(data);
    } else if (pathname === "/img/1.jpg") {
      const data = fs.readFileSync("./img/1.jpg");
      // 重要：在测试时，把浏览器的禁用缓存选项关闭。
      /**
       * 1) 设置请求头的方式有多种。
       * 2) 强制缓存只有两种：
       *    1.设置响应头：Expires这个属性只有http1.0有效，
       *    2.http1.1使用 'Cache-Control': 'max-age=60（单位是S，表示多少秒只能再请求使用缓存）'
       */
      // res.writeHead(200, {
      //     'Cache-Control': 'max-age=60'
      // })
      // let expires = new Date(Date.now() + 60 * 1000);
      // res.setHeader('Expires', expires.toUTCString());
      // res.setHeader('Cache-Control', 'max-age=60');
      res.end(data);
    } else if (pathname === "/img/2.png") {
      const data = fs.readFileSync("./img/2.png");
      res.writeHead(200, {
        Expires: new Date("2021-06-30 16:30:22").toUTCString(),
      });

      res.end(data);
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("http://localhost:3000");
  });
