// https://www.codewars.com/kata/580755730b5a77650500010c/javascript

function sortMyString(str) {
    let evens = str.split("").filter((num, index) => index % 2 == 0)
    let odds = str.split("").filter((num, index) => index % 2 !== 0)
    return evens.join("") + " " + odds.join("")
}