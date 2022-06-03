// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
    let numberTally = numbers.reduce((obj, item) => {
        if (!obj[item]) obj[item] = 0
        obj[item]++
        return obj
    }, {})

    for (number in numberTally) {
        if (numberTally[number] % 2 !== 0) return +number
    }
}