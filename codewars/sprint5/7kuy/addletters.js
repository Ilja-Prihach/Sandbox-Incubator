// Description:
//     Your task is to add up letters to one letter.
//
//     The function will be given a variable amount of arguments, each one being a letter to add.
//
//     Notes:
// Letters will always be lowercase.
//     Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
//     addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'
// Confused? Roll your mouse/tap over here
//




function addLetters(...letters) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const sum = letters.reduce((acc, letter) => {
        return acc + alphabet.indexOf(letter) + 1;
    }, 0);

    const index = (sum - 1) % 26;

    return alphabet[index] || 'z';
}