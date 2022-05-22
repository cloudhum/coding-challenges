// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
    if (iterable.constructor !== Array) iterable = iterable.split('');
    return iterable.filter((x, index) => {
        if (iterable[index - 1] !== x) return x;
    })
}