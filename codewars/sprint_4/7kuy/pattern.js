// Task:
//     You have to write a function which creates the following odd-numbers staircase pattern up to the desired number of rows.
//
//     If the input is <= 0, return an empty string
// If the input is even, round it down to the odd number that precedes it.
//     There are no spaces in the pattern
// The lines are separated by a newline character (\n)


function pattern(n) {

    let output = "";
    if (n <= 0) {
        return output;
    }
    if (n % 2 === 0) {
        n--
    }
    for (let i = 1; i <= n; i += 2) {
        for (let j = 1; j <= i; j++) {
            output += i.toString()
        }
        if (i < n) {
            output += '\n'
        }
    }
    return output;
}