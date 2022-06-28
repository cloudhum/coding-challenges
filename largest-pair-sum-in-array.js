// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers) {
    let sorted = numbers.sort((a, b) => b - a);
    return sorted[0] + sorted[1];
}