//跟踪记录已经注册的订阅者回调
//订阅者的组成是{eventKey: [callback]}
//每当事件被触发的时候, 对应的一个或者数个callback(回调)就会被调用
const subscribers = {}

module.exports = {
    //发布者发布一个事件event
    publish(event, data){
        //查看一个事件event 是否有订阅者
        //如果没有订阅者, 结束
        if(!subscribers[event]){
            return;
        }
        //如果有订阅者, 触发callback(回调)
        subscribers[event].forEach(subscriberCallback =>
            subscriberCallback(data)
        )

    },
    //订阅者
    subscribe(event, callback){
        //查看是否有对应的事件
        //如果没有, 建立事件
        if(!subscribers[event]){
            subscribers[event] = [];
        }
        //更新事件
        //Index 用来追踪取消订阅
        let index = subscribers[event].push(callback) - 1;
        return{
            unsubscribe(){
                subscribers[event].splice(index, 1)
            } 
        }
    }
}