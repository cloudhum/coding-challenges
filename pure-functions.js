// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/solutions/javascript

const state = {
    modifier: 2,
};

function solution(arr, options) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = arr[i] + (2 * options.modifier);
    }
    return newArr;
}
