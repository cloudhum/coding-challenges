// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
    let letters = str.split('');
    let result = [];
    for (let i = 0; i < letters.length; i += 2) {
        if (letters[i + 1] === undefined) {
            result.push(letters[i] + "_");
        }
        else {
            result.push(letters[i] + letters[i + 1]);
        }
    }
    return result;
}