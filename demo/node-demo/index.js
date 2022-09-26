/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-26 16:15:50
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-26 16:47:56
 * @FilePath: \demo\node-demo\index.js
 */
const {MongoClient}=require('mongodb')
const client=new MongoClient('mongodb://127.0.0.1:27017')
const dbName = 'admin';
const clientFun=async (c)=>{
  // Use connect method to connect to the server
  await client.connect();
  console.log('成功链接上数据库--');
  const db = client.db(dbName);
  return db.collection(c);
}
async function main() {
 const collection=await clientFun('ff')
//  await collection.insertMany([{name:'test tina',age:10},{name:'one tina',age:11}])
//  var res=await collection.findOne({age:{$gt:5}})
var res=await collection.deleteMany({age:{$gt:50}})
 console.log(res)
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());