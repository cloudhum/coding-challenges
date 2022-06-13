// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript

function sortArray(array) {
    const odds = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odds.push(array[i])
            array.splice(i, 1, "")
        }
    }
    odds.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "") {
            array[i] = odds.shift()
        }
    }
    return array;
}