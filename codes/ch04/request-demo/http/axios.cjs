/**
 * @author: HuRuiFeng
 * @file: axios.cjs
 * @time: 2023/1/10 16:00
 * @project: nodejs-web-learning
 * @desc: P182 axios模块使用示例
 */
const axios = require('axios')

axios.defaults.baseURL = 'http://127.0.0.1:3000/users/post'
axios.post('/users/post', {
    username: "yourUsername",
    password: "yourPassword"
}).then(function (response) {
    console.log(response.data)
}).then(function (error) {
    console.log(error)
})