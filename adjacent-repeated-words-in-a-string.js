// https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

function countAdjacentPairs(searchString) {
    let repeating = false;
    let count = 0;
    let strArr = searchString.toLowerCase().split(" ");

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == strArr[i + 1]) {
            if (repeating == false) {
                repeating = true;
                count++;
            }
        } else if (repeating == true) {
            repeating = false;
        }
    }
    return count;
}