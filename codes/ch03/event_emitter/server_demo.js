/**
 * @author: HuRuiFeng
 * @file: server_demo.js
 * @time: 2023/1/10 11:31
 * @project: nodejs-web-learning
 * @desc: P124 EventEmitter的http.Server事件
 */

const http = require('http')

const app = http.createServer(function (req, res) {
    console.log(`${req.method} ${req.url}`)
    // 设置响应状态码和Headers
    res.writeHead(200, {'Content-Type': 'text/plain'})

    // 设置响应向浏览器写入内容
    res.end('Hello Node.js\n')
})

app.on('request', function (request, response) {
    // request事件处理
})

app.listen(3000, () => {
    const PORT = app.address().port
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})