// https://www.codewars.com/kata/56efc695740d30f963000557/javascript

String.prototype.toAlternatingCase = function () {
    const alternating = this.split('').map(x => {
        if (x == x.toUpperCase()) return x.toLowerCase();
        else if (x == x.toLowerCase()) return x.toUpperCase();
    })
    return alternating.join('');
}