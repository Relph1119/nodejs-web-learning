/**
 * @author: HuRuiFeng
 * @file: test.cjs
 * @time: 2023/1/11 12:30
 * @project: nodejs-web-learning
 * @desc: P220 测试代码
 */

// 1. 引入数据库连接
require('./connect.cjs')

// 2. 引入模型定义文件
var User = require('./user.cjs')

// 3. 实例化模型
var user = new User({
    username: 'i5ting',
    password: '012345678'
});

// 4. 对数据库进行操作
user.save(function (err, doc) {
    if (err) {
        console.log('save error:' + err)
    }
    console.log('save success \n' + doc)
})