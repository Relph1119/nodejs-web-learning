/**
 * @author: HuRuiFeng
 * @file: stream_demo.js
 * @time: 2023/1/10 11:06
 * @project: nodejs-web-learning
 * @desc: P119 Stream的文件操作
 */
const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
    fs.readFile(__dirname + '/data/data.txt', (err, data) => {
        res.end(data)
    })
})

app.listen(3000, function () {
    const PORT = app.address().port
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})