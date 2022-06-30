// https://www.codewars.com/kata/53697be005f803751e0015aa

const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}

const nums = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
}

function encode(string) {
    let stringArr = string.split('');

    for (let i = 0; i < stringArr.length; i++) {
        if (vowels[stringArr[i]]) {
            stringArr[i] = "" + vowels[stringArr[i]];
        }
    }
    return stringArr.join("");
}

function decode(string) {
    let stringArr = string.split("");

    for (let i = 0; i < stringArr.length; i++) {
        if (!isNaN(stringArr[i])) {
            stringArr[i] = nums[stringArr[i]]
        }
    }
    return stringArr.join("")
}