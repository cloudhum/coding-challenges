// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript

function spEng(sentence) {
    return (sentence.match(/English/i) || []).length == 1;
}