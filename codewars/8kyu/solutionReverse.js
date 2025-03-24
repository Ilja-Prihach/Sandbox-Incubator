// Complete the solution so that it reverses the string passed into it.


const x = 'world'

function solution(str){
    let a = []
    for (let i = 0; i <= str.length; i++) {
        a.unshift(str[i])
    }
    return a.join('')
}
console.log(solution(x));

