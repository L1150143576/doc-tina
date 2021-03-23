const path=require('path')
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    mode:"development",
    entry:{
        main:'./src/index.js'
    },
    devServer:{
      contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.jpg$/,
                use:{
                    loader:'url-loader',
                    options:{
                        //placeholder占位符
                        name:'[name].[ext]',
                        outputPath:"images/",
                        limit:10240
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
                
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
       template:'./src/index.html'
    })],
    optimization:{
      splitChunks:{
        chunks: 'all',//分割打包同步和异步代码 同步还需要在cacheGroups里面设置
        minSize: 2000,
        minRemainingSize: 0,
        maxSize: 3000,
        minChunks: 1,//使用1次以上才会进行代码分割
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,//从modules引入的库单独打包到vendors文件里面
            priority: -10,
            reuseExistingChunk: true,
            filename:'vendors.js'
          },
          default: {
            minChunks: 2,
            priority: -20,//权重，两个条件都符合看权重放在哪个组
            reuseExistingChunk: true,
            filename:'common.js'
          },
        }
      }
    },
    output:{
        publicPath:'./',
        chunkFilename: (pathData) => {
            return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
          },
        // filename:'bundle.js',//打包文件名
        path:path.resolve(__dirname,'../bundle')//打包出的文件放到哪个目录下
    },
}
    
