/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-05 15:32:39
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-05 15:37:19
 * @FilePath: \node-demo\2-3\read.js
 */
var fs=require('fs')
fs.readFile('./a.txt','utf8',function(err,data){
  console.log(err,data)
})