// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.
// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

function calculator(a,b,sign){
    // Your code here...
    let calc
    if (typeof a === 'number' && typeof b  === 'number' && (sign === '+' || sign === '-' || sign === '*' || sign === '/')) {
        switch (sign) {
            case'+':
                calc = a + b;
                break;
            case'-':
                calc = a - b;
                break;
            case'*':
                calc = a * b;
                break;
            case'/':
                calc =  a / b;
                break        
        }
    } else {
        calc = 'unknown value'
    }
    return calc
}

console.log(calculator(4, 2, '-'));






let a = str.split('-') 
    
    let b = a.map(function(elem, index) {
        if (index === 0) {
            return elem
        } else {
            return elem[0].toUpperCase() + elem.slice(1)
        }
    })
    

//     return b.join('')
// let b = a.map(function(elem, index) {
//         return index === 0 ? elem : elem.charAt(0).toUpperCase() + elem.slice(1)
//     })

function filterRange(arr, a, b) {
    let res = []
    for (let i =0; i<arr.length; i++) {
        if (arr[i] >=a && arr[i] <=b){
            res.push(arr[i])
        }
    }
    return res
}
console.log(filterRange([5, 3, 8, 1], 1, 4));



// function qwerty(arr, a, b) {
//     arr = arr.filter(function(elem) {
//         return elem >= a && elem <= b
//     })
//     return arr
// }



// let arr = [5, 2, 1, -10, 8];
// arr = arr.sort(function(a, b) {
//     return a - b
// })


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);










function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0], // Преобразование строки в число
            op = split[1],
            b = +split[2]; // Преобразование строки в число

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

// Создание экземпляра класса
let calc = new Calculator();

// Вызов метода calculate
console.log(calc.calculate("2 + 4")); // 6





// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];


// function qwer(arr) {
//     let newarr = []
//     for (const un in arr) {
//         newarr.push(arr[un].name)
//     }
// return newarr
// }
// console.log(qwer(users));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names );






let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

const zzz = usersss.map(function(elem) {
    return {fullname: elem.name + " " + elem.surname,
        id: elem.id
    }
})







users = users.sort((a, b) => a.age - b.age)
    return users