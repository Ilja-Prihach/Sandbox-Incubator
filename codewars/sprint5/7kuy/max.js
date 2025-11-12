// В массиве найти максимальное число

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let minValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
        minValue = numbers[i]
    }
}
console.log(minValue)

const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let maxValue = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i]
    }
}
console.log(maxValue)