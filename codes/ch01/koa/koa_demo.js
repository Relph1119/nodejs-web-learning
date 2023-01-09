/**
 * @author: HuRuiFeng
 * @file: koa_demo.js
 * @time: 2023/1/9 15:35
 * @project: nodejs-web-learning
 * @desc: P35 新兴Web开发框架Koa
 */

const http = require('http')
const Koa = require('koa')
const app = new Koa()

// 响应所有请求
app.use(async ctx => {
    ctx.body = 'Hello Koa 2'
})

const server = http.createServer(app.callback())

server.listen(3000)