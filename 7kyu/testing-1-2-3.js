// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

var number = function (array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(`${i + 1}: ${array[i]}`);
    }
    return resultArray;
}