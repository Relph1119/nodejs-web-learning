/**
 * @author: HuRuiFeng
 * @file: koa_router_demo.cjs
 * @time: 2023/1/9 19:49
 * @project: nodejs-web-learning
 * @desc: P90 koa-router用法示例
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')();

router.get('/', function (ctx, next) {
    ctx.body = 'Hello Koa 2.x with router'
});

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3002)