// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    let errors = 0;
    let errorLetters = "nopqrstuvwxyz"
    let sArray = s.split('').forEach(letter => {
        if (errorLetters.includes(letter)) errors++
    })
    return `${errors}/${s.length}`
}