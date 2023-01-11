/**
 * @author: HuRuiFeng
 * @file: koa_co_demo.cjs
 * @time: 2023/1/9 18:50
 * @project: nodejs-web-learning
 * @desc: P70 中间件的写法
 */
const co = require('co');
const compose = require('koa-compose');

function* a(next) {
    console.log('第1个中间件before 1')
    yield next;
    console.log('第1个中间件after 2')
}

function *b(next) {
    console.log('  第2个中间件before 3')
    yield next;
    console.log('  第2个中间件after 4')
}

function* c(next) {
    console.log('    业务逻辑处理')
}

const stack = [a, b, c];
co(compose(stack))