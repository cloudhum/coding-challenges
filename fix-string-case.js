// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/javascript

function solve(s) {
    s = s.split('');
    const uppercaseCount = s.filter(letter => {
        if (letter == letter.toUpperCase()) return letter;
    })
    const lowercaseCount = s.filter(letter => {
        if (letter == letter.toLowerCase()) return letter;
    })
    s = s.join('');
    if (uppercaseCount == lowercaseCount) return s.toLowerCase();
    return uppercaseCount.length > lowercaseCount.length ? s.toUpperCase() : s.toLowerCase();
}