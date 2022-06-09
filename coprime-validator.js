// https://www.codewars.com/kata/585c50e75d0930e6a7000336/train/javascript

function isCoprime(x, y) {
    let xFactors = generateFactors(x);
    let yFactors = generateFactors(y);
    let result = true;

    xFactors.forEach((num, i) => {
        if (yFactors.includes(num)) result = false;
    })
    return result;
}

function generateFactors(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) factors.push(i);
    }
    return factors;
}