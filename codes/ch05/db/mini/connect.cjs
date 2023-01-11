/**
 * @author: HuRuiFeng
 * @file: connect.cjs
 * @time: 2023/1/11 12:24
 * @project: nodejs-web-learning
 * @desc: P218 连接数据库
 */

const Mongoose = require('mongoose')

Mongoose.connect("mongodb://127.0.0.1:27017/db_helloworld")

Mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败" + error)
})

Mongoose.connection.on("open", function () {
    console.log("数据库连接成功")
})

module.exports = Mongoose