// https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
//preload variable: dict

var makeBackronym = function (string) {
    return string.split('').map(letter => {
        return dict[letter.toUpperCase()];
    }).join(' ')
};