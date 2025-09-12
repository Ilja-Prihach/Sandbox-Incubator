// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
//
// flatten([1,2,3])  ==> [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]])  ==> [[1,2,3]]



function flatten(arr) {
    // TODO: Program me
    let res = []
    for (let i = 0; i < arr.length; i++) {
       if(Array.isArray(arr[i])) {
           res.push(...arr[i])
       } else {
           res.push(arr[i])
       }
    }
    return res;
}