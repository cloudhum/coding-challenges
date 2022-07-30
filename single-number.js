// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }

    }
    for (num in map) {
        if (map[num] !== 2) return +num
    }
};