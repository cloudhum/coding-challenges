// https://algo.monster/problems/two_sum_sorted

function twoSumSorted(arr, target) {
    let slow = 0
    let fast = arr.length - 1
    while (slow < fast) {
        let sum = arr[slow] + arr[fast]
        if (sum == target) return [slow,fast]
        else if (sum < target) slow++
        else if (sum > target) fast--
    }
}