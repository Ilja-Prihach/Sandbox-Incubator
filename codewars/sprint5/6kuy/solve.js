// Given an integer n, find two integers a and b such that:
//
//     A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
//     You will return the digitSum(a) + digitsum(b).
//
//     For example:
//     solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.





function solve(n) {
    const length = n.toString().length;
    let numWithNines = '9'.repeat(length - 1);

    if (numWithNines === '') {
        numWithNines = '0';
    }

    const a = parseInt(numWithNines);
    const b = n - a;
    digitSumA = a.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    digitSumB = b.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)

    return digitSumA + digitSumB;
}

// Вспомогательная функция для суммы цифр
// function digitSum(num) {
//     return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
// }