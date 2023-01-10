/**
 * @author: HuRuiFeng
 * @file: node_fetch.js
 * @time: 2023/1/10 15:58
 * @project: nodejs-web-learning
 * @desc: P182 node-fetch模块使用示例
 */

const fetch = require('node-fetch')

fetch('http://127.0.0.1:3000/users/post', {
    method: 'POST',
    body: JSON.stringify({
        username: "yourUsername",
        password: "yourPassword"
    }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {
    return res.json()
}).then(function (json) {
    console.log(json)
})