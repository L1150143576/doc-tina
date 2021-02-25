
```

const PENDING="pending"
const RESOLVED="resolved"
const REJECTED="rejected"
function myPromise(fn){
 
  var _this=this
  _this.status=PENDING
  _this.value=null
  _this.reason=null
  _this.resolvedQuene=[]
  _this.rejectQuene=[]
  function resolve(value){
     if(_this.status==PENDING){
       _this.status=RESOLVED
       _this.value=value
       _this.resolvedQuene.map(cb=>cb(value))
     }
  }
  function reject(reason){
    if(_this.status==PENDING){
      _this.status=REJECTED
      _this.reason=reason
      _this.rejectQuene.map(cb=>cb(value))
    }
  }
  try{
    fn(resolve,reject)
  }catch(err){
    reject(err)
  }
}
myPromise.prototype.then=function(onFullfilled,onRejected){
  const that=this
  if(that.status==PENDING){
    that.resolvedQuene.push(onFullfilled)
    that.rejectQuene.push(onRejected)
  }
  if(that.status==RESOLVED){
    onFullfilled(that.value)
  }
  if(that.status==REJECTED){
    onRejected(that.reason)
  }
  return that
}
const p=new myPromise((res,rej)=>{
  setTimeout(() => {
    res(1000);
  }, 1000);
})

p.then(res=>{
  console.log("结果："+res) //结果：1000
}).then(res=>{
  console.log("JSTina") //JSTina
})

```