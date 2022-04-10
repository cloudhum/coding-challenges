//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

function isDivideBy(number, a, b) {
    let result;
    (number % a == 0 && number % b == 0) ? result = true : result = false;
    return result;
}