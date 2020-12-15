module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',

  ],
  plugins: [['@vue/babel-plugin-jsx', { mergeProps: false }]],//关闭props数组函数
}
