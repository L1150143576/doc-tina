/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-05 15:39:19
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-05 15:40:24
 * @FilePath: \node-demo\2-3\write.js
 */
var fs=require('fs')
fs.writeFile('./a.txt','小婷写入',function(err){
   console.log(err);
})