/**
 * @author: HuRuiFeng
 * @file: express_demo.js
 * @time: 2023/1/9 15:33
 * @project: nodejs-web-learning
 * @desc: P33 曾经抗鼎的Express框架
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/2', function (req, res) {
    res.send('Hello World2')
});

// 启动服务器
app.listen(4001);