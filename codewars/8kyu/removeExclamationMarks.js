// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


let str = "Happy!!! holiday !!!!!"


function removeExclamationMarks(str) {
    return str.replace(/[!]/g, '');
}