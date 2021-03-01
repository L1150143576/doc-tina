Function.prototype.myCall=function(context){
  context.fn=this
  const otherArgus=[...arguments].slice(1)
  const result=context.fn(otherArgus)
  delete context.fn
  return result
}

Function.prototype.myApply=function(context,arr){
  context.fn=this
  let result;
  if(arr){
    result=context.fn(arr)
  }else{
    result=context.fn()
  }
  delete context.fn
  return result
}

Function.prototype.myBind=function(context){
  const fn=this
  const otherArgus=[...arguments].slice(1)
  const result=function(){
    const resultArgus=[...arguments]
    if(this instanceof result){
      fn.apply(this,otherArgus.concat(resultArgus))
    }else{
      fn.apply(context,otherArgus.concat(resultArgus))
    }
  }

  result.prototype=Object.create(fn.prototype)
  return result
}