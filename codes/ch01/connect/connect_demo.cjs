/**
 * @author: HuRuiFeng
 * @file: connect.cjs
 * @time: 2023/1/9 15:19
 * @project: nodejs-web-learning
 * @desc: P29 最早的Connect
 */

var connect_demo = require('connect')
var http = require('http')

var app = connect_demo()

app.use('/2', function fooMiddleware(req, res, next) {
    res.end('Hello from Connect2!\n');
})

// 响应所有请求
app.use(function (req, res) {
    res.end('Hello from Connect!\n');
})

// 创建Node.js HTTP服务器喝监听端口
http.createServer(app).listen(3011)