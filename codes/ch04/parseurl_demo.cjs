/**
 * @author: HuRuiFeng
 * @file: parseurl_demo.cjs
 * @time: 2023/1/10 14:58
 * @project: nodejs-web-learning
 * @desc: P154 使用parseurl解析URL地址
 */

function createReq(url, originalUrl) {
    return {
        originalUrl: originalUrl,
        url: url
    }
}

const req = createReq('https://127.0.0.1:8080/site/oneway_list.htm?a=1&b=2#abc')
const url = require('parseurl')(req)

console.log(url)

const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    return ctx.body = {
        href: ctx.href,
        path: ctx.path,
        url: ctx.url,
        query: ctx.query,
        querystring: ctx.querystring,
        search: ctx.search,
        host: ctx.host,
        hostname: ctx.hostname,
        protocol: ctx.protocol,
        secure: ctx.secure,
        subdomains: ctx.subdomains,
        origin: ctx.origin
    }
})

app.listen(3000)