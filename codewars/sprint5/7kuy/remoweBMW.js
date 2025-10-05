// It happened decades before Snapchat, years before Twitter and even before Facebook. Targeted advertising was a bit of a challenge back then.
//     One day, the marketing professor at my university told us a story that I am yet to confirm using reliable sources.
//     Nevertheless, I retold the story to dozens of my students already, so, sorry BMW if it is all a big lie.
//
//     Allegedly, BMW, in an attempt to target the educated, produced billboard posters featuring the English alphabet with three letters missing: B, M and W.
//     Needless to say, many were confused, some to the extent of road accidents.
//
//     Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.
//     If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message:
//
//     new Error("This program only works for text.");

function removeBMW(str){
    if (typeof str !== "string"){
        return new Error("This program only works for text.");
    } else {
        return str.split("").filter(x => x !== 'b' && x !== 'B' && x !== 'm' && x !== 'M' && x !== 'w' && x !== 'W').join("");
    }

}

// function removeBMW(str){
//     return typeof str !== "string"
//         ? new Error("This program only works for text.")
//         : str.split("").filter(x => x !== 'b' && x !== 'B' && x !== 'm' && x !== 'M' && x !== 'w' && x !== 'W').join("");
// }
//
// function removeBMW(str){
//     return typeof str !== "string" ? new Error("This program only works for text.") : str.split("").filter(x => x !== 'b' && x !== 'B' && x !== 'm' && x !== 'M' && x !== 'w' && x !== 'W').join("");
// }