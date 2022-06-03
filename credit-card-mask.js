// https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript

function maskify(cc) {
    if (cc.length <= 4) return cc;
    return cc.substr(0, cc.length - 4).replace(/[A-Za-z0-9]/g, "#") + cc.substr(-4);
}