/**
 * @author: HuRuiFeng
 * @file: koa_otp.js
 * @time: 2023/1/10 16:46
 * @project: nodejs-web-learning
 * @desc: koa-otp中间件的代码实现
 */

const app = require("./otp");
module.exports = function (key) {
    return {
        encode: function (cb) {
            return function (ctx, next) {
                var token = app.encode(key)
                ctx.opt_token = token
                if (cb) {
                    cb(ctx, next)
                } else {
                    return next()
                }
            }
        },
        decode: function (token, cb) {
            return function (ctx, next) {
                ctx.opt_valid = app.decode(key, token)
                if(cb) {
                    cb(ctx, next)
                } else {
                    return next()
                }
            }
        }
    }
}