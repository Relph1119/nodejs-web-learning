/**
 * @author: HuRuiFeng
 * @file: mini_proxy_demo.js
 * @time: 2023/1/10 14:24
 * @project: nodejs-web-learning
 * @desc: P141 mini-proxy示例
 */
const MiniProxy = require('mini-proxy');

const myProxy = new MiniProxy({
    "port": 9393,
    "onBeforeRequest": function (requestOptions) {
        console.log("proxy request:" + requestOptions.host + (requestOptions.path || ''));
    }
});

myProxy.start()
console.log("proxy start at 9393")