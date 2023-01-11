/**
 * @author: HuRuiFeng
 * @file: app.cjs
 * @time: 2023/1/9 20:05
 * @project: nodejs-web-learning
 * @desc: P98 koa-router示例
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

const index = require('./routes/index')

router.use('/', index.routes())

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3002)
