// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n) {
    let result = 1;
    for (let i = 0; n - i > 0; i++) {
        result *= (n - i);
    }
    return result;
}