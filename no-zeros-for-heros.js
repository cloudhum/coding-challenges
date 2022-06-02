// https://www.codewars.com/kata/570a6a46455d08ff8d001002/javascript

function noBoringZeros(n) {
    if (n == 0) return n
    n = n.toString()
    if (n.endsWith('0')) {
        for (let i = n.length - 1; i >= 0; i--) {
            if (+n[i] !== 0) return +n.slice(0, i + 1)
        }
    }
    return +n
}