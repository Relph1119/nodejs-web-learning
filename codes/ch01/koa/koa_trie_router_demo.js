/**
 * @author: HuRuiFeng
 * @file: koa_trie_router_demo.js
 * @time: 2023/1/9 15:39
 * @project: nodejs-web-learning
 * @desc: P37 koa-trie-router路由中间件
 */

const Koa = require('koa')
const Router = require('koa-trie-router')

let app = new Koa()
let router = new Router()

router
    .use(function (ctx, next) {
        console.log('* requests')
        return next()
    })
    .get(function (ctx, next) {
        console.log('GET requests')
        return next()
    })
    .put('/foo', function (ctx) {
        ctx.body = 'PUT /foo requests'
    })
    .post('/bar', function (ctx) {
        ctx.body = 'POST /bar requests'
    })

app.use(router.middleware())
app.listen(3000)