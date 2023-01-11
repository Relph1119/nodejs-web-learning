/**
 * @author: HuRuiFeng
 * @file: connect2.cjs
 * @time: 2023/1/9 15:22
 * @project: nodejs-web-learning
 * @desc: P31 中间件执行顺序
 */

var connect = require('connect')
var http = require('http')

var app = connect()

app.use('/', function fooMiddleware(req, res, next) {
    res.end('Hello from Connect2!\n');
})

app.use('/2', function fooMiddleware(req, res, next) {
    res.end('Hello from Connect2!\n');
})

// 响应所有请求
app.use(function (req, res) {
    res.end('Hello from Connect!\n');
})

// 创建Node.js HTTP服务器喝监听端口
http.createServer(app).listen(3011)