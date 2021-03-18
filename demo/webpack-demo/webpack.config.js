const path=require('path')
module.exports={
    mode:"development",
    entry:{
        main:'./src/index.js'
    },
    module:{
        rules:[
            {
                test:/\.jpg$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }
                }
            }
        ]
    },
    output:{
        filename:'bundle.js',//打包文件名
        path:path.resolve(__dirname,'bundle')//打包出的文件放到哪个目录下
    },
}
    