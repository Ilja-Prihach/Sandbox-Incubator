// Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False
//
// Input	Expected Output
//     []	False
//     [True, False, False]	True
//     [True, False, False, True]	False
//     [False, False, False, False]	False


function onlyOne(...flags) {
    let count = 0;

    for (const flag of flags) {
        if (flag === true) {
            count++;
            if (count > 1) {
                return false;
            }
        }
    }

    return count === 1;
}