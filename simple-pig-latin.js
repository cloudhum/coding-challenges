// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
    let strArr = str.split(" ")

    return strArr.map(word => {
        if (/[.!?\\-]/.test(word)) return word;
        return word.slice(1) + word.slice(0, 1) + "ay"
    }).join(" ")
}