// https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0
        let right = n
        let boundary = -1

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (isBadVersion(mid)) {
                boundary = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return boundary
    };
};