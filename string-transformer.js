// https://www.codewars.com/kata/5878520d52628a092f0002d0/javascript

function stringTransformer(str) {
    let transformCases = str.split('').map(char => {
        return (char == char.toLowerCase()) ? char.toUpperCase() : char.toLowerCase()
    }).join("")

    return transformCases.split(" ").reverse().join(" ")
}