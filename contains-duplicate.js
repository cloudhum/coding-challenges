// https://leetcode.com/problems/contains-duplicate/submissions/

var containsDuplicate = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map[num] == undefined) {
            map[num] = 1
        } else {
            return true
        }
    }
    return false
};