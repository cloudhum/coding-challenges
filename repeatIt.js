// https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript

var repeatIt = function (str, n) {
    if (typeof str !== "string") return "Not a string";
    let repeatedStr = "";
    for (let i = 0; i < n; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}

var repeatIt = function (str, n) {
    return typeof str == "string" ? str.repeat(n) : "Not a string"
}