/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-14 16:39:49
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-16 14:42:22
 * @FilePath: \demo\node-demo\express\express-fm\app.js
 */
const express=require('express')
const db=require('./db')

const app=express()
app.use(express.json())
app.get('/',async function(req,res){
  try{
    let resData=await db.getDb()
    res.send(JSON.parse(resData).users)
  }
  catch(err){
    res.status(500).json({err})
  }
})

app.post('/',async function(req,res){
  let body=req.body
  if(!body){
    res.status(403).json({
      error:'缺少用户信息！'
    })
  }else{
    let users=await db.getDb()
    const newid=users[users.length-1].id+1
    users.splice(users.length-1,0,{id:newid,...body})
    try{
      let data=await db.insertDb(users)
      if(!data)res.status(200).send({msg:'添加成功！'})
      else res.status(200).send({msg:'添加失败'})
    }catch(err){
      res.status(500).json({err})
    }

  }
})
app.put('/:id',async (req,res)=>{
  const id=req.params.id
  try{
     let userinfo=await db.getDb()
     let userID=Number.parseInt(id)
     let user=userinfo.find(_v=>_v.id===userID)
     if(!user)res.status(403).json({error:'用户不存在'})
     else{
      const body=req.body
      user.username=body.username?body.username:user.username
      user.age=body.age?body.age:user.age
      userinfo[userID-1]=user
      if(!await db.insertDb(userinfo))res.status(200).json({msg:'用户信息修改成功！'})
     }
  }catch(err){
    res.status(500).json({err})
  }
})

app.listen('3003',()=>{
  console.log('Run http://127.0.0.1:3003')
})