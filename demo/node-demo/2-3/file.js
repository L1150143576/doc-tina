/*
 * @Author: luoxiaoting
 * @Description: 向文件追加内容
 * @Date: 2022-09-05 15:41:31
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-05 15:50:41
 * @FilePath: \node-demo\2-3\file.js
 */
var fs=require('fs')
fs.readFile('./a.txt','utf8',function(err,data){
  if(!err){
    fs.writeFile('./a.txt',data+'这个是jstina追加的内容',function(err){
      if(!err){
        console.log("=追加内容成功=");
      }
    })
  }
})