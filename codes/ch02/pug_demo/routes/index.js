/**
 * @author: HuRuiFeng
 * @file: index.js
 * @time: 2023/1/9 21:49
 * @project: nodejs-web-learning
 * @desc:
 */

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})