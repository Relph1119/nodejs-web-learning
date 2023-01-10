/**
 * @author: HuRuiFeng
 * @file: http_demo2.js
 * @time: 2023/1/10 10:47
 * @project: nodejs-web-learning
 * @desc: P113 使用http.write()方式
 */

const http = require('http')

const app = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`)
    // 设置响应状态码和Headers
    res.writeHead(200, {'Content-Type': 'text/html'})

    // 设置响应向浏览器写入内容
    res.write("<!DOCTYPE 'html'>")
    res.write("<html>")
    res.write("<head>")
    res.write("<title>《更了不起的Node.js》</title>")
    res.write("</head>")
    res.write("<body>")
    res.write("Hello HTML!")
    res.write("</body>")
    res.write("</html>")
    res.end()
})

app.listen(function () {
    const PORT = app.address().port
    console.log(`Server running at http://127.0.0.1:${PORT}/`)
})

const server = http.createServer(app).listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`umi mock serve at http://%s:%s`, host, port)
})