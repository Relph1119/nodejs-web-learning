/**
 * @author: HuRuiFeng
 * @file: net_demo.cjs
 * @time: 2023/1/10 14:10
 * @project: nodejs-web-learning
 * @desc: P137 使用net创建TCP服务
 */

const net = require('net')

const app = net.createServer((connect) => {
    console.log("client connected")

    connect.on("data", (data) => {
        // 解析头部信息，然后执行net.connect...
        console.log(data.toString())
    })
    connect.on("end", () => {
        console.log("client disconnected")
    })
})

app.listen(3000)