// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript

function invert(array) {
    const invertedArr = array.map(x => {
        if (x >= 0) return -x;
        else if (x < 0) return Math.abs(x);
    })
    return invertedArr;
}