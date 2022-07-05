// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
    let wordsArr = words.split(" ");
    return wordsArr.sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/);
    }).join(" ");
}