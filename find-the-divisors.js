// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
    const divisors = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) divisors.push(i);
    }
    return divisors.length >= 1 ? divisors : `${integer} is prime`;
};