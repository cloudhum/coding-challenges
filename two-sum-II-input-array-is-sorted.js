// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function (numbers, target) {
    let slow = 0
    let fast = numbers.length - 1

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[slow] + numbers[fast] == target) {
            return [slow + 1, fast + 1]
        }
        if (numbers[slow] + numbers[fast] > target) {
            fast--
        } else if (numbers[slow] + numbers[fast] < target) {
            slow++
        }
    }
};