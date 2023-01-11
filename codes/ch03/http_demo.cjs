/**
 * @author: HuRuiFeng
 * @file: http_demo.cjs
 * @time: 2023/1/10 10:20
 * @project: nodejs-web-learning
 * @desc: P111 通过Node.js创建一个简单的HTTP服务
 */

const http = require('http')
const PORT = 3000

http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`)
    // 设置响应状态码和Headers
    res.writeHead(200, {'Content-Type': 'text/plain'})

    // 设置响应向浏览器写入内容
    res.end('Hello Node.js\n')
}).listen(PORT)

console.log(`Server running at http://127.0.0.1:${PORT}/`)