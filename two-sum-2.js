// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let complement = target - value;
        if (complement in map) {
            return [map[complement], i];
        } else {
            map[value] = i;
        }
    }
};