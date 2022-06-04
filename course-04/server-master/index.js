const Koa = require('koa')
const cors = require('@koa/cors');
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(cors({
  origin: '*'
}));

app.use(static(
  path.join( __dirname,  staticPath)
))

app.listen(4002, () => {
  console.log('server is running, port is 4002')
})

