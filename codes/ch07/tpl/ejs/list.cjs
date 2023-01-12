/**
 * @author: HuRuiFeng
 * @file: list.cjs
 * @time: 2023/1/12 13:44
 * @project: nodejs-web-learning
 * @desc: P318 使用EJS模板引擎进行动态渲染：list
 */

var fs = require('fs')
var ejs = require('ejs')

// 读取模板文件，放到user_tpl_str变量中
var user_tpl_str = fs.readFileSync('./list.ejs').toString();

console.log(user_tpl_str)

var users = [
    {
        name: '朴灵'
    }, {
        name: 'alsotang'
    }, {
        name: 'i5ting'
    }
]

// 通过EJS的render方法，对user_tpl_str和数据进行编译
var html = ejs.render(user_tpl_str, {
    users: users
});

console.log(html)