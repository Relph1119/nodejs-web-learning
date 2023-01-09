const router = require('koa-router')()

// 视图渲染
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// 字符串
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

// JSON API
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
