/**
 * @author: HuRuiFeng
 * @file: mongoose_demo.cjs
 * @time: 2023/1/11 11:04
 * @project: nodejs-web-learning
 * @desc: P216 Mongoose最小示例
 */

// 1. 引入Mongoose模块
const Mongoose = require('mongoose')

// 2. 通过Mongoose.connect连接MongoDB数据库
Mongoose.connect("mongodb://127.0.0.1:27017/db_helloworld")

Mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败" + error)
})

Mongoose.connection.on("open", function () {
    console.log("数据库连接成功")
})

// 3. 通过Mongoose.model定义模型
const Cat = Mongoose.model('Cat', {name: String})

// 4. 通过关键字new实例化Cat模型，参数是{name: 'Zildjian'}，创建kitty对象
const kitty = new Cat({name: 'Zildjian'})

// 5. 执行kitty.save，将模型数据保存到数据库
kitty.save(function (err) {
    if (err) {
        console.log('save error: ' + err)
    }
    console.log('save success')
})
