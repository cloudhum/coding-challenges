// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript

var capitals = function (word) {
    word = word.split('');
    let uppercaseList = [];
    word.forEach((letter, index) => {
        if (letter == letter.toUpperCase()) uppercaseList.push(index)
    })
    return uppercaseList;
};