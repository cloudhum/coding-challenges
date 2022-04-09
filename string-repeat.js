//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr(n, s) {
    let str = "";
    let x = n;
    while (x > 0) {
        str += s;
        x--;
    }
    return str;
}