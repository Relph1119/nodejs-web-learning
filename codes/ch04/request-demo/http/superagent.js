/**
 * @author: HuRuiFeng
 * @file: superagent.js
 * @time: 2023/1/10 15:53
 * @project: nodejs-web-learning
 * @desc: P180 superagent模块使用示例
 */
const request = require('superagent')

request.post('http://127.0.0.1:3000/users/post')
    .send({
        username: "yourUsername",
        password: "yourPassword"
    })
    .end(function (err, res) {
        console.log(ers.body)
    })