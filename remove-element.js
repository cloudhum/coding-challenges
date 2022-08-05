// https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
    let slow = 0
    let boundary = -1
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
            slow++
        }
        if (nums[slow] == val && fast == nums.length - 1) {
            return slow
        }
    }
};