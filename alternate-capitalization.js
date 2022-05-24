// https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript

function capitalize(s) {
    let evens = s.split('').map((letter, index) => {
        if (index % 2 == 0) return letter.toUpperCase();
        else return letter;
    }).join('');

    let odds = s.split('').map((letter, index) => {
        if (index % 2 !== 0) return letter.toUpperCase();
        else return letter;
    }).join('');

    return [evens, odds];
};