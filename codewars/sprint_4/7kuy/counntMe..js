// Given a string of integers, count how many times that integer repeats itself, then return a string showing the count and the integer.
//
//     Example: "1123"
//
// Here 1 comes twice so <count><integer> will be "21"
// then 2 comes once so <count><integer> will be "12"
// then 3 comes once so <count><integer> will be "13"
// hence output string will be "211213".
//
//     Similarly "211213" will return "1221121113" (1 time 2, 2 times 1, 1 time 2, 1 time 1, 1 time 3)
//
// Return "" for empty, nil or non numeric strings




function countAndSay(str) {
    // Обработка крайних случаев
    if (!str || typeof str !== 'string' || !/^\d+$/.test(str)) {
        return "";
    }

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Проверяем, совпадает ли текущая цифра со следующей
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Добавляем счетчик и цифру к результату
            result += count + str[i];
            count = 1; // Сбрасываем счетчик для следующей цифры
        }
    }

    return result;
}