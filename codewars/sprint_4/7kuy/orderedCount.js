// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
//     Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]




const orderedCount = function (text) {
    if (text === "") return []
    let res = []
    const arr = text.split('')
    let count = {}
    for (let i = 0; i < arr.length; i++) {
        const  item = arr[i]
        count[item] = (count[item] || 0) + 1
    }
    for (let j = 0; j < arr.length; j++) {
        const item = arr[j]
        if (count[item] > 0) {
            res.push([item, count[item]])
            count[item] = 0
        }
    }
    return res;
}