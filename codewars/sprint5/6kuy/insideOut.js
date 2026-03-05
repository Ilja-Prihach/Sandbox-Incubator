// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.
//
//     If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
//
//     An example should clarify:
//
//     'taxi' would become 'atix' 'taxis' would become 'atxsi'
//
// Words will be separated by exactly one space and there will be no leading or trailing spaces.

function insideOut(x){
    const words = x.split(' ');

    const result = words.map(word => {
        const len = word.length;
        const mid = Math.floor(len / 2)
        const leftPart = word.slice(0, mid);
        const rightPart = word.slice(len % 2 === 0 ? mid : mid + 1)
        const left = leftPart.split('').reverse().join('');
        const right = rightPart.split('').reverse().join('');
        if (len % 2 === 0) {
            return left + right;
        }
        return left + word[mid] + right;
    })
    return result.join(' ');
}