/**
 * @author: HuRuiFeng
 * @file: app.cjs
 * @time: 2023/1/9 18:58
 * @project: nodejs-web-learning
 * @desc: P71 探索Koa中间件机制
 */

var co = require('co');
var debug = require('debug')('v0')

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
        const fn = this.compose(this.middleware)
        debug('callback compose fn = ' + fn)
        // 调用中间件代码
        co(fn).then(cb, function (err){
            console.error(err.stack);
        });
    },
    compose: function (middleware) {
        debug('compose=' + middleware)
        return function *(next) {
            if(!next) {
                next = function * (){}
            }
            var i = middleware.length;

            while (i--) {
                debug('compose middleware['+i+']=:' + middleware[i])
                // 转换为fn(..f2(f1(noop())))
                next = middleware[i].call(this, next);
                debug(next)
            }
            // 转变为Generator函数
            return yield  *next;
        }
    }
}