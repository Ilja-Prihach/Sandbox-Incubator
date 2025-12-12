// As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13...
// Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610.
// Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers
// (bigger than integer type can contain), so, please, be careful with overflow.



function getLastDigit(index) {


    let first = 0n;
    let second = 1n;
    let number = 0n;

    for(let i=2; i <= index;i++ ){

        number = first + second
        first = second
        second = number

    }

    return +number.toString().slice(-1)

}




function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 0) return 0
    if (n === 1) return 1


    memo[n] = fibonacciMemo((n - 1), memo) + fibonacciMemo((n - 2), memo)
    return memo[n]
}