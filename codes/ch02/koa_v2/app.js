/**
 * @author: HuRuiFeng
 * @file: app.js
 * @time: 2023/1/9 18:58
 * @project: nodejs-web-learning
 * @desc: P71 探索Koa中间件机制
 */

const co = require('co')
const debug = require('debug')('v2')
const compose = require('koa-compose')

module.exports = {
    middleware:[],
    use: function (fn) {
        this.middleware.push(fn);
        return this;
    },
    callback: function () {
        const fn = compose(this.middleware);
        debug('callback compose fn = ' + fn)
        var ctx = {}
        fn(ctx).then(function (){})
    }
}