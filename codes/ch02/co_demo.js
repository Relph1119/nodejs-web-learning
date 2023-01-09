/**
 * @author: HuRuiFeng
 * @file: co_demo.js
 * @time: 2023/1/9 17:17
 * @project: nodejs-web-learning
 * @desc: P69 用co简化代码
 */

var co = require('co')

function* a() {
    console.log('第1个中间件before 1')
    yield* b()
    console.log('第1个中间件after 2')
}

function* b() {
    console.log('  业务逻辑处理')
}

co(function *() {
    yield* a()
})

