// 搭建 express 服务
const express = require('express')
const app = express()
// 导入路由接口
const router = require('./router')

app.use('/api', router)

app.listen(8989, () => {
  console.log('server is running at port 8989')
})