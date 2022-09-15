/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-15 11:04:57
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-15 11:08:01
 * @FilePath: \demo\node-demo\express\express-fm\db.js
 */
const fs=require('fs')
const {promisify}=require('util')
const readFile=promisify(fs.readFile)
const writeFile=promisify(fs.writeFile)
exports.getDb=async ()=>{
 let data= await readFile('./db.json','utf-8')
 return JSON.parse(data)
}

exports.insertDb=async (data)=>{
  let formatData=JSON.stringify(data)
  return await writeFile('./db.json',formatData)
}