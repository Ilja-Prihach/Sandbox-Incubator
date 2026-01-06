// You must implement a function that returns the difference between the largest and the smallest value in a given list /
// array (lst) received as the parameter.
//
//     lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
//     [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
//     [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
// Have fun!


function maxDiff(list) {
    if (list.length < 2) {
        return 0;
    }
    let max = list[0]
    let min =  list[0]
    for(let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
        if (list[i] < min) {
            min = list[i]
        }
    }
    return max - min
}