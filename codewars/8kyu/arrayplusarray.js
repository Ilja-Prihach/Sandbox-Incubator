// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.





let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function arrayPlusArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2); 
    let sum = 0;
    for (let i = 0; i < arr3.length; i++) {
        sum += arr3[i]
        }
    return sum
}