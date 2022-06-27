// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(arr, k) {
    if (k == 0 || k > arr.length) return "";
    let maxLength = "";

    for (let i = 0; i < arr.length - k + 1; i++) {
        let concatonated = "";
        for (let j = i; j < i + k; j++) {
            concatonated += arr[j];
        }
        if (concatonated.length > maxLength.length) {
            maxLength = concatonated;
        }
    }
    return maxLength;
}