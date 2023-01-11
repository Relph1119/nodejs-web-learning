/**
 * @author: HuRuiFeng
 * @file: user.cjs
 * @time: 2023/1/11 12:26
 * @project: nodejs-web-learning
 * @desc: P219 定义User模型
 */

const Mongoose = require('mongoose')

// 定义Schema
UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// 定义模型
const UserModel = Mongoose.model('User', UserSchema)

// 暴露接口
module.exports = UserModel