// Write a function that takes an integer in input and outputs a string with currency format.
//
//     Integer in currency format is expressed by a string of number where every three characters are separated by comma.
//
//     For example:
//
//     123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.




function toCurrency(price) {
    // Преобразуем число в строку
    const str = price.toString()
    let result = []

    // Идем с конца и вставляем запятые каждые 3 цифры
    for (let i = str.length - 1, count = 0; i >= 0; i--, count++) {
        result.unshift(str[i]) // добавляем цифру в начало
        if (count % 3 === 2 && i !== 0) { // каждые 3 цифры (кроме начала)
            result.unshift(',')
        }
    }

    return result.join('')
}