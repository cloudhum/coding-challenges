// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function (nums1, nums2) {
    let map = {}
    let result = []

    for (let i = 0; i < nums1.length; i++) {
        if (map[nums1[i]] == undefined) {
            map[nums1[i]] = 0
            map[nums1[i]]++
        } else {
            map[nums1[i]]++
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] !== undefined && map[nums2[i]] >= 1) {
            map[nums2[i]]--
            result.push(nums2[i])
        }
    }
    return result
};