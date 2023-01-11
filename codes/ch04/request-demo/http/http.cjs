/**
 * @author: HuRuiFeng
 * @file: http.cjs
 * @time: 2023/1/10 15:45
 * @project: nodejs-web-learning
 * @desc: P178 HTTP模块：POST请求
 */

const queerystring = require('querystring')
const http = require('http')

// 定义请求数据
const data = queerystring.stringify({
    username: "yourUsername",
    password: "yourPassword"
})

// 定义HTTP请求选项
const options = {
    host: "127.0.0.1",
    path: "/users/post",
    port: "3000",
    method: "POST",
    header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
}

// 定义HTTP请求回调函数
const callback = function (response) {
    let str = ''
    response.on('data', function (chunk) {
        str += chunk
    })

    response.on('end', function (){
        console.log(str)
    })
}

// 定义HTTP请求
const req = http.request(options, callback)

// 写入表单数据
req.write(data)

// 发送请求
req.end()