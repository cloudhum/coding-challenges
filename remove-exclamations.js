// https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript

function remove(s, n) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "!" && n > 0) {
            s[i] = "";
            n--;
        }
    }
    return s.join('');
}