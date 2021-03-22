const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "url-loader",
          options: {
            //placeholder占位符
            name: "[name].[ext]",
            outputPath: "images/",
            limit: 20480, //超过20KB图片不编译成base64,直接还是原文件
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js", //打包文件名
    path: path.resolve(__dirname, "bundle"), //打包出的文件放到哪个目录下
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.[contenthash].html",
    }),
  ],
};
