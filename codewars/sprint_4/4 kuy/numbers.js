// Given the string representations of two integers, return the string representation of the sum of those integers.
//
//     For example:
//
//     sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
//
//     I have removed the use of BigInteger and BigDecimal in java
//
// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {

    let second = b;
    let first = a;
    let temp = 0;
    let res;
    let sum;
    if (first.length > second.length) {
        second = b.padStart(first.length, '0')
    }
    if (second.length > first.length) {
        first = a.padStart(second.length, '0')
    }


    for (let i = first.length - 1; i >= 0; i--) {
        sum = parseInt(first[i]) + parseInt(second[i]) + temp
        if (sum > 9) {
            temp = 1;
            sum = sum % 10

        } else {
            temp = 0;
        }
        if (res) {
            res = sum.toString() + res
        } else {
            res = sum.toString()
        }
    }

    if (temp) {
        res = temp.toString() + res
    }

    for (let i = 0; i < res.length; i++) {
        if (res[0] === '0') {
            res = res.slice(1)
            console.log(res)
        } else {
            return res
        }
    }
    return res
}