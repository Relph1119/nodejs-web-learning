/**
 * @author: HuRuiFeng
 * @file: test.js
 * @time: 2023/1/9 19:03
 * @project: nodejs-web-learning
 * @desc: P72探索Koa中间件机制-测试
 */

const app = require('./app')

app.use((ctx, next) => {
    console.log(1)
    return next().then(() => {
        console.log(2)
    })
})

app.use(function *(next) {
    console.log(3)
    yield next
    console.log(4)
})

app.callback();