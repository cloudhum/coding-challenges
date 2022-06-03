// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr) {
    let minimums = []
    for (var row in arr) {
        minimums.push(Math.min(...arr[row]))
    }
    return minimums.reduce((sum, number) => {
        return sum + number
    }, 0)
}