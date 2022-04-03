// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

function mygcd(x, y) {
    let smallest = x < y ? x : y;
    for (let i = smallest; i > 0; i--) {
        if (x % i == 0 && y % i == 0) return i;
    }
}