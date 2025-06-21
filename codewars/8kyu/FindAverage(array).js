// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

const array = [2, 4, 6]
function findAverage(arr) {
    if(arr.length === 0) {
        average = 0
    } else {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    average = sum / arr.length
    }

    return average;
}