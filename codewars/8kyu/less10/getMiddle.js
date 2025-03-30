




function getMiddle(str) {
    const length = str.length;
    
    if (length % 2 !== 0) {
        const s1 = Math.floor(length / 2);
        return str[s1];
    }
    
    else {
        const s2 = length / 2 - 1;
        return str.substring(s2, s2 + 1);
    }
}


console.log(getMiddle('qwertey'));


// function getMiddle(str) {
//     const length = str.length;
    
//     if (length % 2 !== 0) {
//         const s1 = length / 2 - 1;
//         return str[s1];
//     }

//     else {
//         const s2 = length / 2 ;
//         return str.substring(s2, s2 + 1);
//     }
// }

// console.log(getMiddle('qwertys'));


// array.filter(callback(element[, index[, array]]))
// Где:

// callback — это функция, которая тестирует каждый элемент массива. Она должна возвращать true, если элемент должен быть включен в новый массив, и false в противном случае.
// element — текущий элемент, который обрабатывается.
// index — необязательный параметр, указывающий индекс текущего элемента.
// array — необязательный параметр, указывающий сам массив.

