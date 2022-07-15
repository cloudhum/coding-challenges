// https://www.codewars.com/kata/57eaec5608fed543d6000021/javascript

function divCon(x) {
    let stringsSum = x.reduce((sum, num) => {
        if (typeof num == "string") {
            return sum + (+num);
        }
        else return sum;
    }, 0);

    let integersSum = x.reduce((sum, num) => {
        if (typeof num !== "string") {
            return sum + num;
        }
        else return sum;
    }, 0)

    return integersSum - stringsSum;
}