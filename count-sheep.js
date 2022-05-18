// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/javascript

var countSheep = function (num) {
    let sheep = "";
    for (let i = 1; i <= num; i++) {
        sheep += `${i} sheep...`;
    }
    return sheep;
}