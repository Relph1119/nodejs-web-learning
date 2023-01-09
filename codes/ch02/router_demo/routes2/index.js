/**
 * @author: HuRuiFeng
 * @file: index.js
 * @time: 2023/1/9 20:22
 * @project: nodejs-web-learning
 * @desc: P99 koa-router示例
 */

var router = require('koa-router')();

router.prefix('/')
router.get('/', (ctx, next) => {
    ctx.body = 'Hello Koa 2.x with routes';
})

module.exports = router;