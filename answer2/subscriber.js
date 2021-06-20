const pubsub = require('./pubsub');


let subscription = pubsub.subscribe('showMessage', (data)=>{
    console.log(data);
    subscription.unsubscribe()
})


