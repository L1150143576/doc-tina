const path=require("path")
module.exports={
    mode:"production",
    entry:"./src/index.js",
    externals:["lodash"],//打包的时候遇到lodash则不打包lodash
    output:{
        path:path.resolve(__dirname,'dist'),//打包出的文件放到哪个目录下
        'filename':'liarary.js',
        library:"root",
        libraryTarget:'umd',//this:挂在到全局 使用this.library可以获取到
     
    }
}