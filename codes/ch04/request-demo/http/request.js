/**
 * @author: HuRuiFeng
 * @file: request.js
 * @time: 2023/1/10 15:51
 * @project: nodejs-web-learning
 * @desc: P180 request模块使用示例
 */

const request = require('request')

request.post({
    url: 'http://127.0.0.1:3000/users/post',
    form: {
        username: "yourUsername",
        password: "yourPassword"
    }
}, (err, httpResponse, body) => {
    if (err)
        console.log(err)
    console.log(body)
})