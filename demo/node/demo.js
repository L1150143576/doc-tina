// const http = require('http')

// const port = 3333

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('你好世界\n')
// })

// server.listen(port, (req) => {
//   console.log(`服务器运行在 http://${req}:${port}/`)
// })
const fs = require('fs')
// fs.stat('./nginx_error.log', (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(stats.size)
//   // stats.isFile() //true
//   stats.isDirectory() //false
//   stats.isSymbolicLink() //false
//   stats.size //1024000 //= 1MB
// })
const content = '一些内容'

fs.appendFile('nginx_error.log', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //完成！
})