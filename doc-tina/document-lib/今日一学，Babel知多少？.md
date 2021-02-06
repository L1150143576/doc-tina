#今日一学：`Babel`知多少？
临近放假，需求已经完成的差不多，利用闲暇之余，学习一下大佬的知识大纲，这个时候才发现自己跟大佬的距离不是一星半点，只能一点一点积累，毕竟从0到1，也是有一个过程的

**文章大纲**

 1.基础知识：
  - 原理
  - 工具
  - 核心
   
 2.实现
 3.总结


##关于babel
> Babel 是 JavaScript 编译器，更确切地说是源码到源码的编译器，通常也叫做“转换编译器（transpiler）”。 意思是说你为 Babel 提供一些 JavaScript 代码，Babel 更改这些代码，然后返回给你新生成的代码。

## 原理

 #### babel实现过程大概分为三部分
   + 解析：将代码转换成 AST
     - 词法分析：将代码（字符串）分割为 token 流，即语法单元成的数组
     - 语法分析：分析 token 流（上面生成的数组）并生成 AST
   
   + 转换：访问 AST 的节点进行变换操作生产新的 AST
     - Taro 就是利用 babel 完成的小程序语法转换
   + 生成：以新的 AST 为基础生成代码

#### 工具
## 实现
 > 编写插件的核心是遍历，其中最重要是**Visitors（访问者）**,当我们谈及“进入”一个节点，实际上是说我们在访问它们， 之所以使用这样的术语是因为有一个访问者模式（visitor）的概念。.
访问者是一个用于 AST 遍历的跨语言的模式。 简单的说它们就是一个对象，定义了用于在一个树状结构中获取具体节点的方法。 
  
接下来让我们实现一个去除console的例子
  opts获取我们的其他配置`属性`，打印path.node.expression.calle出来是这样的，判断是否输入的语句包含`console`,不包括直接`return` 包括的话直
  ```
    module.exports = function ({ types: t }) {
      return {
        visitor: {
          ExpressionStatement(path, { opts }) {
            const { object, property } = path.node.expression.callee
            if (object.name !== 'console') return
            if (!(opts.ignore || []).find(ele => ele === property.name)) path.remove()
          }
        }
      }
    }
  ```
  在项目新建babel配置，具体如下,忽略ignore的内容
  ```
  {
  "plugins": [
       [
      "./babel-plugin-console-clear.js",
      {
        "ignore": [
          "time",
        ]
      },
  
    ],
  ]
}
  ```
  命令配置
  > npm install babel
  下载babel命令，后面直接使用npx babel XXX就可以了

  例如：新建一个index.js页面
  ```
      console.log('张三')
      console.time('李四')
      console.error('隔壁老王')
  ```
  **执行结果**
  

  如果不了解babel插件的，可以去参考[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)


参考
[深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.cn/post/6844903956905197576)

