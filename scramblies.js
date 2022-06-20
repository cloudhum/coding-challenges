// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
    const str2Arr = str2.split("");
    const letterCounts = str1.split("").reduce((letter, sum) => {
        if (!letter[sum]) letter[sum] = 0;
        letter[sum]++;
        return letter;
    }, {})

    for (let i = 0; i < str2Arr.length; i++) {
        if (!letterCounts[str2Arr[i]]) {
            return false;
        } else {
            letterCounts[str2Arr[i]]--;
        }
    }
    return true;
}
