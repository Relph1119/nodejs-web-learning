/**
 * @author: HuRuiFeng
 * @file: main.cjs
 * @time: 2023/1/10 16:49
 * @project: nodejs-web-learning
 * @desc: P201 获取otp_token
 */
var otp = require('./koa-otp.cjs')("jkjldsfsfsdf")

app.use(otp.encode(function (ctx, next) {
    ctx.body = {
        token: ctx.opt_token,
        valid: ctx.opt_valid
    }
}))
