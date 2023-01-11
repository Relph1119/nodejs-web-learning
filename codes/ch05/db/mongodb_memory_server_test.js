/**
 * @author: HuRuiFeng
 * @file: mongodb_memory_server_test.js
 * @time: 2023/1/11 12:43
 * @project: nodejs-web-learning
 * @desc: P228 使用mongodb-memory-server模块快速测试Mongodb
 */
import test from 'ava'
import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose from 'mongoose'
import bluebird from 'bluebird'

mongoose.Promise = bluebird.Promise

// 定义Schema
const UserSchema = new mongoose.Schema({
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
const User = mongoose.model('User', UserSchema)

// 定义user实体
let user = new User({
    username: 'i5ting',
    password: '0123456789'
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

test.beforeEach(async () => {
    user = await user.save()
})

test.after(() => User.remove())

test.serial('#find() return array', async (t) => {
    const users = await User.find({})
    t.true(users instanceof Array)
    const _user1 = await User.findOne({username: 'i5ting'})
    t.true(_user1.username === 'i5ting')
})

test.serial('#findById() return one', async t => {
    try {
        const _user1 = await User.findOne({username: 'i5ting'})
        const _user = await User.findById(_user1._id)
        t.is(_user.username, 'i5ting')
    } catch (error) {
        t.ifError(error)
    }
})

test.serial('#findOneAndUpdate()', async t => {
    try {
        const result = await User.update({username: 'i5ting for update'})
        const _user = await User.findById(user._id)
        t.is(_user.username, 'i5ting for update')
    } catch (error) {
        t.ifError(error)
    }
})

test.serial('#remove() return array', async t => {
    await User.remove({})
    const _user1 = await User.findOne({username: 'i5ting'})

    t.true(_user1 === null)
})

