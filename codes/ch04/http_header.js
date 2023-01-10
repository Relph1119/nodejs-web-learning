/**
 * @author: HuRuiFeng
 * @file: http_header.js
 * @time: 2023/1/10 15:07
 * @project: nodejs-web-learning
 * @desc: P157 获取HTTP头部
 */

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    return ctx.body = {
        header: ctx.header,
        get_cache_control: ctx.get('Cache-Control')
    }
})

app.listen(3000)