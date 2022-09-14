/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-14 14:52:37
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-14 15:25:45
 * @FilePath: \demo\node-demo\httpServer\router.js
 */
var controller=require('./controller')
module.exports=(req,res)=>{
  if(req.method=='GET'){
    // console.log(url.parse(req.url,true).query.url);
    if(req.url=='/'){
      controller.index(res)
    }else{
      controller.default(res)
    }
  }else if(req.method=='POST'){
    let data=''
    req.on('data',function(r){
      data+=r
    })
    req.on('end',function(){
      controller.user(data,req)
    })
 
    
  }
  else{}
}