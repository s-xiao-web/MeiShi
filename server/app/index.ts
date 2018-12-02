// import Koa from 'koa'
import Koa = require('koa')
import * as Nunjucks from 'nunjucks'
import * as koaStaticCache from 'koa-static-cache'

import { useControllers } from 'koa-controllers';
const app = new Koa()

app.use(koaStaticCache('./static',{
  gzip: true,
  prefix: '/public'
}))

app.use( async (ctx, next) => {
  ctx.template = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(__dirname + '/../views/')
  )
  await next()
})

useControllers(app, __dirname + '/controllers/**/*.js', {
  multipart: {
    dest: './uploads'
  }
})

app.listen(8888)

//  Ts 目的 类型检测    代码提示
//  但是有的库是通过js写的 js不支持类型检测， 这时候需要一个辅助 需要一个类型声明
//  ts类型 声明 为了能够使非ts的文件或模块能够支持类型检测（类型提示）而创建的一个类型声明文件
//  这个声明文件 以.d.ts结尾的文件， 一遍一些比较有名的库， 框架 都有对应的声明文件

// 关于Ts的问题
//  A 声明文件的使用？
//  B 装饰器
//  c 控制器
