/**
 * @author: HuRuiFeng
 * @file: index.js.js
 * @time: 2023/1/9 15:52
 * @project: nodejs-web-learning
 * @desc: P42 集成AVA
 */

'use strict'

import test from 'ava'

function add (a, b) {
    return a + b
}

test('simple test', t => {
    let c = add(1, 2)
    t.is(c, 3)
})