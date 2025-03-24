

const animal = {
    name: 'dog',
    years: 6,
    legs: 4,
    color: 'white'
}


function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

console.log(animal(dog1));







const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

function combine () {

}




let aaa = '4455446'
let bbb = '44755544666'

function findAdded(st1, st2){
    let added = st2.filter(function(element) {
        if(st1.includes(element)) {

        }
    })




    return added;
    }






    function findMissingNumbers(st1, st2) {
    // Преобразуем строки в массивы чисел
    const numbers1 = Array.from(st1).map(Number);
    const numbers2 = Array.from(st2).map(Number);
    console.log(numbers1);
    console.log(numbers2);

    // Используем Set для хранения уникальных значений
    const set1 = new Set(numbers1);
    const result = [];

    // Проходим по второму массиву и добавляем в результат числа, которых нет в первом массиве
    for (const num of numbers2) {
        if (!set1.has(num)) {
            result.push(num);
        }
    }

    // Сортируем результат и возвращаем строку с числами через пробел
    return result.sort((a, b) => a - b).join(' ');
}

// Пример использования
const st1 = '4455446';
const st2 = '44755544666';
const result = findMissingNumbers(st1, st2);
console.log(result); // Вывод: "4 5"








function findMissingNumbers(st1, st2) {
    // Разделяем строки на массивы чисел
    const nums1 = new Set(st1.split(' ').map(Number));
    const nums2 = st2.split(' ').map(Number);

    // Находим числа, которых нет в st1
    const missingNumbers = nums2.filter(num => !nums1.has(num));

    // Сортируем оставшиеся числа
    missingNumbers.sort((a, b) => a - b);

    // Преобразуем обратно в строку и возвращаем
    return missingNumbers.join(' ');
}

// Пример использования
const st1 = "1 2 3 4 4 4 4 5";
const st2 = "4 5 6 7 8";
const result = findMissingNumbers(st1, st2);
console.log(result); // Вывод: "6 7 8"





function findAdded(st1, st2){
    for(let i = 0; i < st1.length; i++){
        console.log(st2);
        st2 = st2.replace(st1[i], '');
    }
    return st2.split('').sort().join('');
  }



  const str1 = '4455446';
  const str2 = '44755544666';
  function findAdded(str1, str2){
    const arr1 = str1.split("")
    const arr2 = str2.split("")
    const collector = []
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i])){
        const index = arr1.indexOf(arr2[i])
        arr1.splice(index, 1)
      }else{
        collector.push(arr2[i])
      }
    }
    return collector.sort((a, b) => a - b).join("")
}
console.log(str1, str2);






function findMissingNumbers(st1, st2) {
    // Преобразуем строки в массивы чисел
    const numbers1 = st1.split(' ').map(Number);
    const numbers2 = st2.split(' ').map(Number);

    // Используем Set для хранения уникальных значений
    const set1 = new Set(numbers1);
    const result = [];

    // Проходим по второму массиву и добавляем в результат числа, которых нет в первом массиве
    for (const num of numbers2) {
        if (!set1.has(num)) {
            result.push(num);
        }
    }

    // Сортируем результат и возвращаем строку с числами через пробел
    return result.sort((a, b) => a - b).join(' ');
}

// Пример использования
const st1 = "1 2 3";
const st2 = "1 2 3 4 5";
const result = findMissingNumbers(st1, st2);
console.log(result); // Вывод: "4 5"





let price = 240
function changePrice() {
  let price = 300
}
changePrice()
console.log(price)