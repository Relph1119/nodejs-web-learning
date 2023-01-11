/**
 * @author: HuRuiFeng
 * @file: model_extend_test.js
 * @time: 2023/1/11 15:09
 * @project: nodejs-web-learning
 * @desc: P236 模型扩展
 */
import test from 'ava'
import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose from 'mongoose'
import bluebird from 'bluebird'

mongoose.Promise = bluebird.Promise

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    openid: {
        type: String,
        required: false
    },
})

// 定义模型
let User = mongoose.model('User', UserSchema)

UserSchema.statics.find_by_username = function (username, cb) {
    return mongoose.findOne({
        username: username
    }, cb)
}

UserSchema.methods.is_exist = function (cb) {
    let query;
    query = {
        username: User.username,
        password: User.password
    }
    return mongoose.model('User').findOne(query, cb)
}

// 定义模型
User = mongoose.model('User', UserSchema)

// 3. 定义user实体
let user = new User({
    username: 'i5ting',
    password: '0123456789',
    openid: 'xxxxxx1'
})

let user2 = new User({
    username: 'i5ting for is_exist',
    password: '0123456789',
    openid: 'xxxxxx2'
})

// 启动MongoDB实例
const mongodb = MongoMemoryServer.create()

// 在运行测试用例之前，需要创建数据库连接
test.before(async () => {
    const uri = (await mongodb).getUri()
    await mongoose.connect(uri, {
        autoIndex: false,
        maxPoolSize: 10
    })
})

test.before(async () => {
    user = await user.save();
    user2 = await user2.save();
})

test.serial('#find_by_username()', async (t) => {
    try {
        User.find_by_username('i5ting', (err, user) => {
            t.not(err)
            t.not(user)
            t.is(user.username, 'i5ting')
            t.is(user.password, '0123456789')
        })
    } catch (error) {
        // t.ifError(error)
        console.log(error)
    }
})

test.serial('#is_exits()', async (t) => {
    try {
        let is_exist = user2.is_exist();
        t.true(is_exist)
    } catch (error) {
        // t.ifError(error)
        console.log(error)
    }
})

test.after(t => {
    User.remove({}, (err, result) => {
    })
})