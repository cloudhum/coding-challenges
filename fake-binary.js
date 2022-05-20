// https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript

function fakeBin(x) {
    return x
        .split("")
        .map((el) => {
            if (el < 5) return (el = 0);
            if (el >= 5) return (el = 1);
        })
        .join("");
}