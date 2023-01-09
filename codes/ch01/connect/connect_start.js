/**
 * @author: HuRuiFeng
 * @file: connect_start.js
 * @time: 2023/1/9 15:27
 * @project: nodejs-web-learning
 * @desc: P32 启动服务
 */

var connect = require('connect');
var http = require('http');

var app = connect();

// 对响应进行gzip压缩
var compression = require('compression');
app.use(compression);

// 在游览器缓存里存取会话状态
var cookieSession = require('cookie-session');
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}));

// 解析urlencoded的请求体，并赋值给req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// 响应所有请求
app.use(function (req, res) {
    res.end('Hello from Connect!\n');
})

// 启动服务器
http.createServer(app).listen(3000);