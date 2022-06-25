// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(string) {
    if (string === "") return "1";

    let stringArr = string.split("");
    for (let i = 0; i < stringArr.length; i++) {
        if (!(isNaN(+(stringArr[i])))) {
            let string = stringArr.slice(0, i).join("");
            let num = stringArr.slice(i).join("");

            if (num[0] == 0) {
                let numLength = num.length;
                let baseNum = +num;
                baseNum++;
                let baseNumLength = ("" + baseNum).length

                if (baseNumLength >= numLength) {
                    return string + baseNum;
                } else {
                    let leadingZerosCount = numLength - baseNumLength;
                    return string + addZeros(leadingZerosCount) + baseNum;
                }
            } else {
                num = +num + 1;
                return string + num;
            }
        }
    }
    return stringArr.join("") + "1";
}

function addZeros(num) {
    let zeros = "";
    for (let i = 0; i < num; i++) {
        zeros += "0"
    }
    return zeros;
}