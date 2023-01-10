/**
 * @author: HuRuiFeng
 * @file: otp.js
 * @time: 2023/1/10 16:42
 * @project: nodejs-web-learning
 * @desc: P199 OTP（动态口令）的实现
 */

var notp = require('notp')

var opt = {
    window: 0,
}

var app = {
    encode: function (key) {
        return notp.totp.gen(key, opt);
    },
    decode: function (key, token) {
        var login = notp.totp.verify(token, key, opt);

        if(!login) {
            console.log('Token invalid')
            return false
        }
        return true
    }
}

module.exports = app;