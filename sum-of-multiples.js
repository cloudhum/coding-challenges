// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/javascript

function findSum(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    const sum = arr.reduce((total, element) => {
        if (element % 3 == 0 || element % 5 == 0) return total + element;
        else return total;
    }, 0);
    return sum;
}