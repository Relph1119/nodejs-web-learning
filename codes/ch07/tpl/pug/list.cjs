/**
 * @author: HuRuiFeng
 * @file: list.cjs
 * @time: 2023/1/12 14:03
 * @project: nodejs-web-learning
 * @desc: P320 使用Pug模板引擎进行动态渲染：list
 */

var fs = require('fs');
var pug = require('pug');

// 读取模板文件，放到user_tpl_str变量中
var user_tpl_str = fs.readFileSync('./list.pug').toString()

console.log(user_tpl_str)

// 通过Pug的render方法，对user_tpl_str和数据进行编译
var html = pug.render(user_tpl_str, {
    users: [
        {
            name: '朴灵'
        }, {
            name: 'alsotang'
        }, {
            name: 'i5ting'
        }
    ]
})

console.log(html)