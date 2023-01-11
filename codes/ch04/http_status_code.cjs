/**
 * @author: HuRuiFeng
 * @file: http_status_code.cjs
 * @time: 2023/1/10 15:15
 * @project: nodejs-web-learning
 * @desc: P163 HTTP状态码
 */

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h1>this is status demo</h1>>"
})

app.listen(3000)