// https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] == s[right]) {
            left++
            right--
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }
    }
    return true
}

/**
 * @param {string} s, {integer} i, {integer} j
 * @return {boolean}
 */

var isPalindrome = function (s, i, j) {
    let left = i
    let right = j
    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}