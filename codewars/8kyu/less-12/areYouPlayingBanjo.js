// Создайте функцию, которая отвечает на вопрос "Играете ли вы на банджо?".
// Если ваше имя начинается с буквы "R" или строчной буквы "r", то вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    let result
    // Implement me
    name[0] === 'r' || name[0] === 'R' ? result = `${name} plays banjo` : result = `${name} does not play banjo`
    return result;
}

console.log(areYouPlayingBanjo('fichard'));