//https://www.codewars.com/kata/52f3149496de55aded000410/javascript

function sumDigits(number) {
    number = Math.abs(number).toString().split('');
    const sumOfDigits = number.reduce((sum, digit) => {
        return +sum + +digit;
    }, 0)
    return sumOfDigits;
}