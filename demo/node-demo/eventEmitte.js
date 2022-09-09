/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-09-02 10:12:48
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-09-02 10:12:53
 * @FilePath: \doc-tina\doc-tina\demo\node-demo\eventEmitte.js
 */
// 引入event 模块
const events = require('events');

// 创建eventEmitter对象
const eventEmitter = new events.EventEmitter();

// 创建事件处理程序
const connectHandler = function connected() {
    console.log('连接成功');
    // 触发 data_received事件
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received',function() {
    console.log('数据接收成功');
})

// 触发 connection事件
eventEmitter.emit('connection');
console.log('程序执行完毕');
