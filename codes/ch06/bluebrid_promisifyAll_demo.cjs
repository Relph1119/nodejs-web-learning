/**
 * @author: HuRuiFeng
 * @file: bluebrid_promisifyAll_demo.cjs
 * @time: 2023/1/11 20:39
 * @project: nodejs-web-learning
 * @desc: P298 使用bluebird的promisifyAll方法
 */

var UserModel = {
    create: function (){},
    retrieve: function (){},
    update: function (){},
    delete: function (){}
}

var Promise = require('bluebird')

// Promisify
Promise.promisifyAll(UserModel)

console.dir(UserModel)