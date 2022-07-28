const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const No1WebpackPlugin = require("./plugins/webpack-plugin");
const FileListPlugin = require("./plugins/File-list-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "custom-plugin",
    }),
    new CleanWebpackPlugin(),
    // new No1WebpackPlugin({ msg: "good boy!" }),
    new FileListPlugin(),
  ],
};
