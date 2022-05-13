//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/javascript

function reverseLetter(str) {
    let strNoSymbols = str.replace(/[^a-zA-Z]/g, "").replace(/\s/g, "").split('').reverse().join('');
    return strNoSymbols;
}