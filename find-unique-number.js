// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript

function findUniq(arr) {
    let counted = arr.reduce((obj, item) => {
        if (!obj[item]) obj[item] = 0
        obj[item]++
        return obj
    }, {})

    for (number in counted) {
        if (counted[number] == 1) return +number
    }
}