// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    if (n.toString().length == 1) return n;

    n = n.toString();
    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += +n[i]
    }

    return digital_root(sum);
}