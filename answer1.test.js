const {
    deepFlat,
    deepFlatQueue,
    recursiveReducer,
    deleteDuplicationAndOrderArray
} = require('./answer1');

var arr = [[1,2,2], [3,4,5,5, [6,7,8,9,[1,12,[12,13,[14],111, 10]]]]];
var arr1 = [1,2, [6,7, [8,9,14]],[3,5, [[1,12,[4,13,[],111, 10]]]]];
var ExpectedResult = [1,2,3,4,5,6,7,8,9,10,12,13,14,111];

test('检测deepFlat', ()=>{
    const platArray = deepFlat(arr);
    const platArray1 = deepFlat(arr1);
    expect(deleteDuplicationAndOrderArray(platArray)).toEqual(ExpectedResult)
    expect(deleteDuplicationAndOrderArray(platArray1)).toEqual(ExpectedResult)
})

test('检测deepFlatQueue', ()=>{
    const platArray = deepFlatQueue(arr);
    const platArray1 = deepFlatQueue(arr1);
    expect(deleteDuplicationAndOrderArray(platArray)).toEqual(ExpectedResult)
    expect(deleteDuplicationAndOrderArray(platArray1)).toEqual(ExpectedResult)
})

test('检测recursiveReducer', ()=>{
    const platArray = recursiveReducer(arr);
    const platArray1 = recursiveReducer(arr1);
    expect(deleteDuplicationAndOrderArray(platArray)).toEqual(ExpectedResult)
    expect(deleteDuplicationAndOrderArray(platArray1)).toEqual(ExpectedResult)

})