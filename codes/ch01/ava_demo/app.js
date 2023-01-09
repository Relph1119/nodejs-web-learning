/**
 * @author: HuRuiFeng
 * @file: app.js
 * @time: 2023/1/9 15:54
 * @project: nodejs-web-learning
 * @desc: P43 HTTP接口测试
 */

'use strict'

import test from "ava"
import supertest from 'supertest'
import Koa from '../helloworld/app'

const app = Koa.callback()

test.cb('GET /', t=> {
    supertest(app).get('/').expect(200, (err, res) => {
        t.ifError(err)

        let userId = res.body.id
        t.regexp(res.text, /Hello Koa/, 'res.text == Hello Koa')
        t.end()
    })
})