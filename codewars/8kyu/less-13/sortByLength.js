// Напишите функцию, которая принимает в качестве аргумента массив строк и возвращает отсортированный массив, содержащий те же строки, 
// упорядоченные от самой короткой до самой длинной.
// Например, если в качестве аргумента будет передан этот массив:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Ваша функция вернет следующий массив:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// Все строки в массиве, переданном в вашу функцию, будут разной длины, поэтому вам не придется решать, как упорядочить несколько строк одинаковой длины.

function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest

    return array.sort((a, b) => a.length - b.length);
}