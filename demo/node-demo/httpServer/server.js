/*
 * @Author: luoxiaoting
 * @Description: 创建服务器
 * @Date: 2022-09-14 11:01:09
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-14 15:05:41
 * @FilePath: \demo\node-demo\httpServer\server.js
 */
var http=require('http')
var fs=require('fs')
var url=require('url')
var router=require('./router')
//创建服务器
//获取服务器的实例对象
var server=http.createServer()
server.listen('8888',function(){
  console.log("http://127.0.0.1:8888")
})

server.on('request',function(req,res){
  console.log("监听req方法");
  // res.setHeader('Content-type','text/html;charset=utf-8')
  // res.write('你好')
  // res.end()
  router(req,res)
 

})

