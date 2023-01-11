/**
 * @author: HuRuiFeng
 * @file: koa_redis_demo.cjs
 * @time: 2023/1/10 16:35
 * @project: nodejs-web-learning
 * @desc: P196 基于Redis的会话实现
 */

const Koa = require('koa')
const session = require('koa-generic-session')
const RedisStore = require('koa-redis')

const app = new Koa()
app.keys = ['keys', 'keykeys']

// 加入全局中间件
app.use(session({
    store: new RedisStore(),
    ttl: 30 * 60 * 1000 //半小时
}))

// 在路由中可以直接通过ctx.session对后面的中间件进行操作
app.use(ctx => {
    switch (ctx.path) {
        case '/get':
            ctx.session.user = {name: "i5ting"}
            ctx.body = ctx.session.user
            break
        case '/remove':
            ctx.session = null
            ctx.body = "removed"
            break
    }
})

app.listen(8080)