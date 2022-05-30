// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
    let evens = integers.filter(x => x % 2 == 0)
    let odds = integers.filter(x => x % 2 !== 0)
    return evens.length < odds.length ? evens[0] : odds[0]
}