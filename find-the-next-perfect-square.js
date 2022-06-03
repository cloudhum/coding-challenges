// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript

function findNextSquare(sq) {
    if (!Number.isInteger(Math.sqrt(sq))) return -1;

    for (let i = sq + 1; ; i++) {
        if (Number.isInteger(Math.sqrt(i))) return i;
    }
}