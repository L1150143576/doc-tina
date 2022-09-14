/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-14 14:53:35
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-14 15:25:24
 * @FilePath: \demo\node-demo\httpServer\controller.js
 */
var fs=require('fs')
module.exports={
  index(res){
    fs.readFile('./index.html','utf-8',function(err,data){
      res.write(data)
      res.end()
   })
  },
  user(params,req){
    let str=require('querystring').parse(params)
    console.log(str.username)
    console.log(str.pwd)
  },
  default(res){
    fs.readFile('./test.jpg',function(err,req){
      res.end(req)
    })
  }
}