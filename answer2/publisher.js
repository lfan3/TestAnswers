const pubsub = require('./pubsub');

module.exports={
    publishEvent(){
        const data = {message: "say hello from publisher"}
        pubsub.publish('showMessage', data)
    }
}