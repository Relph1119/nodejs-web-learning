/**
 * @author: HuRuiFeng
 * @file: http.cjs
 * @time: 2023/1/9 15:09
 * @project: nodejs-web-learning
 * @desc: P29 Node.js http模块
 */

const http = require('http')

http.createServer(function(req, res) {
    console.log(req);

    if (req.url === '/') {
        res.end('Hello world!')
    } else if(req.url === '/2') {
        req.end('Hello world!2')
    } else {
        res.end('Hello world! other')
    }
}).listen(8888)