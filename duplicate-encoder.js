// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
    let letters = word.toLowerCase().split("").reduce((obj, letter) => {
        if (!obj[letter]) obj[letter] = 0;
        obj[letter]++;
        return obj;
    }, {});

    return word.toLowerCase().split("").map((letter) => {
        if (letters[letter] == 1) return "("
        else if (letters[letter] > 1) return ")"
    }).join("");
}