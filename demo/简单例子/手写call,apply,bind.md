## 手写 call

```
Function.prototype.mycall=function(context){
  context.fn=this
  console.log(arguments)
  const otherSlice=Array.from(arguments).slice(1)// [...argument]
  context.fn(otherSlice)
  const result=context.fn
  delete context.fn
  return  result
}

this.a=1
function test(){
  this.a=2
  console.log(this.a)
}
test.mycall(test)
```

-

## 手写 apply

```
Function.prototype.myapply=function(context,arr){
 context.fn=this
 let result;
 if(arr){
   result=context.fn(arr)
 }else{
   result=context.fn()
 }
 delete context.fn;
 return result
}
this.a=1
function test(){
  this.a=2
  console.log(this.a)
}
test.myapply(test)
```

## 手写 bind

```
Function.prototype.myBind = function(context = globalThis) {
  // 设置 fn 为调用 myCall 的方法
  const fn = this;

  // 获取该方法剩余参数
  const otherArg = [...arguments].slice(1);

  // 设置返回的一个新方法
  const result = function() {

    // 获取返回方法体的参数
    const resultArg = [...arguments];

    // 如果是通过 new 调用的，绑定 this 为实例对象
    if (this instanceof result) {
      fn.apply(this, otherArg.concat(resultArg));
    } else { // 否则普通函数形式绑定 context
      fn.apply(context, otherArg.concat(resultArg));
    }
  }

  // 绑定原型链
  result.prototype = Object.create(fn.prototype);

  // 返回结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myBind(fn);
fn();
```
