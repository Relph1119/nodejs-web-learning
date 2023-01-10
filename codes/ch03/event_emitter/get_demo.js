/**
 * @author: HuRuiFeng
 * @file: get_demo.js
 * @time: 2023/1/10 11:27
 * @project: nodejs-web-learning
 * @desc: P124 EventEmitter的error响应事件
 */

const http = require('http')

const app = http.createServer(function (req, res) {
    req.on('error', function (err) {
        console.error(err)
        res.statusCode = 400
        res.end()
    })
    res.on('error', function (err) {
        console.error(err)
    })
    if (req.method === 'GET' && req.url === '/echo') {
        req.pipe(res)
    } else {
        res.statusCode = 404
        res.end()
    }
})

app.listen(3000, () => {
    const PORT = app.address().port
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})