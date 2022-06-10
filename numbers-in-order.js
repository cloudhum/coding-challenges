// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

function inAscOrder(arr) {
    let result = true;
    if (arr.length === 1) return result;
    arr.forEach((number, i) => {
        if (number < arr[i - 1]) result = false;
    })
    return result;
}