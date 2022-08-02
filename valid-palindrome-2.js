// https://algo.monster/problems/valid_palindrome
// Time complexity: O(N)
// Space complexity: O(N) because we allocate space for the copied string

function isPalindrome(s) {
    let sFiltered = s.replace(/[^a-z]/gi, "").toLowerCase()
    let left = 0
    let right = sFiltered.length - 1

    while (left < right) {
        if (sFiltered[left] !== sFiltered[right]) return false
        left++
        right--
    }
    return true
}