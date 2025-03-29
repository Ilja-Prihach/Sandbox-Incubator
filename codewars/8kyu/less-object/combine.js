// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB));// Returns { a: 13, b: 20, c: 36, d: 3 }


// function combine(...objects) {
//     // Начальное пустое хранилище для результата
//     const result = {};

//     // Перебираем каждый объект из списка
//     objects.forEach(obj => {
//         // Перебираем каждую пару ключ-значение в текущем объекте
//         Object.entries(obj).forEach(([key, value]) => {
//             // Если ключ уже существует в результате, добавляем значение
//             if (result[key]) {
//                 result[key] += value;
//             } else {
//                 // Иначе устанавливаем значение ключа равным значению из объекта
//                 result[key] = value;
//             }
//         });
//     });

//     return result;
// }



function combine() {
    // Создание пустого объекта для хранения результата
    let obj = {}
    // Внешний цикл для перебора всех объектов
    for (let i = 0; i < arguments.length; i++) {
        // Внутренний цикл для перебора свойств каждого объекта
        for (let key in arguments[i]) {
            // Логический тернарный оператор: Этот код проверяет, существует ли ключ key в результирующем объекте obj. 
            // Если ключ уже существует (т.е. obj[key] истинно), то значение arguments[i][key] добавляется к существующему значению в obj[key]. 
            // Если ключ еще не существует, то его значение инициализируется значением из текущего объекта arguments[i][key].
            obj[key] = obj[key] ? obj[key] + arguments.obj[key] : arguments[i][key]
        }
    }
    return obj;
}




//function combine(objA, ObjB) {
    // Your code here
    // const arrObjA = Object.values(objA)
    // const arrObjB = Object.values(objB)
    // let resultArr = sumArrays(arrObjA, arrObjB)
    // const keyNewObj = Object.keys(objA)
    // let newObj = {}
    // function sumArrays(arr1, arr2) {
    //     let result = []
    //     for (let i = 0; i < arr1.length; i++){
    //         result[i] = arr1[i] + arr2[i]
    //     }
    //     return result
    // }
    // for (let i = 0; i < resultArr.length; i++) {
    //     newObj[keyNewObj[i]] = resultArr[i]
    // }
    // return newObj
//}

