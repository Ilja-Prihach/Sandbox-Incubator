// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
//     For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
//     [10, 343445353, 3453445, 3453545353453] should return 3453455.
//
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел, заданных массивом из минимум 4 положительных целых чисел.
//     Не будут переданы числа с плавающей запятой или неотрицательные целые числа.
//
//     Например, при передаче массива [19, 5, 42, 2, 77] вывод должен быть 7.
//
//     [10, 343445353, 3453445, 3453545353453] должен возвращать 3453455.


function sumTwoSmallestNumbers(numbers) {
    // Code here
    const array = numbers.filter((el) => Number.isInteger(el) && el > 0);
    array.sort((a, b) => a - b);
    return array[0] + array[1];
}