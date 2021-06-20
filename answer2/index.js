const publisher = require('./publisher');
const subscriber = require('./subscriber');

//发布两次, 应该之出现一次console.log() 的内容,
//因为第一次发布消息之后, 订阅者取消了订阅(见subscriber.js)
publisher.publishEvent();
publisher.publishEvent();