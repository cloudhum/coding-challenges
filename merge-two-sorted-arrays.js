// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
    let sorted = arr1.concat(arr2).sort((a, b) => a - b);
    return [...new Set(sorted)]
}