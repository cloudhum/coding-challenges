// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
    if (str.length == 0) return str;
    let strArr = str.includes("-") ? str.split("-") : str.split("_");

    if (strArr[0][0] == strArr[0][0].toUpperCase()) {
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1)
        }
    } else {
        for (let i = 1; i < strArr.length; i++) {
            strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substr(1)
        }
    }
    return strArr.join("");
}