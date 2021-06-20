
/**
 * 3个方法展平array(含相同数字, 未排序) *
 */

//first methode
function deepFlat(array){
    for(let i = 0; i<array.length; i++){
        if(Array.isArray(array[i])){
            array = array.flat();
        }
    }
    return array;
}

//second methode
function deepFlatQueue(array){
    let queue = [];
    let stack = [];

    for(let i = 0; i<array.length; i++){
        let a = Array.isArray(array[i])
        if(a){
            queue.push(array[i]);
        }
        else
            stack.push(array[i])
    }
    while(queue.length){
        let dequeue = queue.shift();
        for(let i = 0; i<dequeue.length; i++){
            let a = Array.isArray(dequeue[i])
            if(a){
                queue.push(dequeue[i]);
            }
            else
                stack.push(dequeue[i])
        }
    }
    return stack;
}

//third method
function recursiveReducer(arr2){
    return arr2.reduce((acc, curr)=>{
        return acc.concat(Array.isArray(curr) ? recursiveReducer(curr) : curr)
     }, [])
}

//去掉有重复的数字, 并将数字一从小到大的顺序排列
function deleteDuplicationAndOrderArray(array){
    return Array.from(new Set(array)).sort((a, b)=>(a - b));
}

//test
module.exports = {
    deepFlat,
    deepFlatQueue,
    recursiveReducer,
    deleteDuplicationAndOrderArray
}
