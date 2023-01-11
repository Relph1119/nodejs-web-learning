/**
 * @author: HuRuiFeng
 * @file: post_demo.cjs
 * @time: 2023/1/10 11:23
 * @project: nodejs-web-learning
 * @desc: P123 EventEmitter POST请求的data和end事件
 */

const http = require('http')

const app = http.createServer((req, res) => {
    console.log(req)
    if (req.method === 'POST' && req.url === 'echo') {
        var body = []
        req.on('data', function (chunk) {
            body.push(chunk)
        }).on('end', function () {
            body = Buffer.concat(body).toString()
            res.end(body)
        })
    } else {
        res.StatusCode = 404
        res.end()
    }
})

app.listen(3002, () => console.log(`Server running at http://127.0.0.1:${app.address().port}/`))
