//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n) {
    if (n < 0 || n > 12) throw 'RangeError';
    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i
    }
    return product
}