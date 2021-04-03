class CopyrightWebpackPlugin{
    apply(compiler){
        //代码打包放到dist目录之前执行此函数
      compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation,cb)=>{
        console.log(compilation.assets,"代码打包放到dist目录之前执行此函数")
        debugger;
        compilation.assets["copyright.txt"]={
            source:function(){
                return "copyright by tina"
            },
            size:function(){
                return 17
            }
        }
        cb()
      })
    }
}
module.exports=CopyrightWebpackPlugin;