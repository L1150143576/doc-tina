/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-02 10:21:08
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-02 10:23:51
 * @FilePath: \doc-tina\doc-tina\demo\node-demo\buffer.js
 */
// buffer: 八位字节组成数组,可以有效的在js中存储二进制数据
// 创建
const buf1 = Buffer.alloc(10);
console.log(buf1);
// 通过数据创建
const buf2 = Buffer.from('hello world');
console.log(buf2);

const buf3 = Buffer.from([1,2,3]);
console.log(buf3);

// 写入
buf1.write('hello buffer');
console.log(buf1);

// 读取
console.log(buf2.toString());
console.log(buf2.toString('base64'));

// 合并
const buf4 = Buffer.concat([buf1,buf2]);
console.log(buf4.toString());
