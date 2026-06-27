const express = require('express')
const path = require('path')
const app = express()

// 托管静态文件（index.html, logo.png 等）
app.use(express.static(path.join(__dirname)))

// 兜底：访问任何路径都返回 index.html（支持前端路由）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`项目地图服务已启动，端口：${PORT}`)
})
