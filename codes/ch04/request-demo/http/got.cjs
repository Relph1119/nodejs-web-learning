/**
 * @author: HuRuiFeng
 * @file: got.cjs
 * @time: 2023/1/10 15:55
 * @project: nodejs-web-learning
 * @desc: P181 got模块使用示例
 */

const got = require('got')

got.post('http://127.0.0.1:3000/users/post', {
    body: {
        username: "yourUsername",
        password: "yourPassword"
    },
    form: true
}).then(response => {
    console.log(response.body)
}).catch(error => {
    console.log(error.response.body)
})