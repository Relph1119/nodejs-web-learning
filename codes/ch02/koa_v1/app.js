/**
 * @author: HuRuiFeng
 * @file: app.js
 * @time: 2023/1/9 18:58
 * @project: nodejs-web-learning
 * @desc: P71 探索Koa中间件机制
 */

var co = require('co');
var debug = require('debug')('v1')
const convert = require('koa-convert')

module.exports = {
    // 中间件由数组保存
    middleware: [],
    use: function (fn) {
        debug('use:' + fn);
        // 给数组增加中间件
        this.middleware.push(fn);
        return this;
    },
    callback: function (cb) {
        const fn = convert.compose(this.middleware)
        debug('callback compose fn = ' + fn)
        const ctx = {}
        fn(ctx).then(function (){})
    }
}