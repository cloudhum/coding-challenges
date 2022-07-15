// https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa/train/javascript

var FindFunction = function (func, arr) {
    for (let i = 0; i < func.length; i++) {
        if (typeof func[i] == "function") {
            return arr.filter(func[i]);
        }
    }
}