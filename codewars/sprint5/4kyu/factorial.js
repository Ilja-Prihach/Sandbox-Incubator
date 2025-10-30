// Your mission is simple: write a function that takes an integer n and returns the value of n!.
//
// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.
//
//     For more on factorials, see http://en.wikipedia.org/wiki/Factorial
//
//     NOTES:
//
//         The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution
//
// I have removed the use of require in the javascript language.


function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return "1";

    let result = [1];

    for (let i = 2; i <= n; i++) {
        let carry = 0;
        const temp = [];

        // Умножаем каждую цифру на i
        for (let j = result.length - 1; j >= 0; j--) {
            let product = result[j] * i + carry;
            temp.unshift(product % 10);
            carry = Math.floor(product / 10);
        }

        // Добавляем оставшийся перенос
        while (carry > 0) {
            temp.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }

        result = temp;
    }

    return result.join('');
}