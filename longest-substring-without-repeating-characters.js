// https://algo.monster/problems/longest_substring_without_repeating_characters
// Time complexity: O(N)

function longestSubstringWithoutRepeatingCharacters(s) {
    let set = new Set()
    let slow = 0
    let fast = 0
    let longest = 0
    while (fast < s.length - 1) {
        let char = s[fast]
        if (!set.has(char)) {
            set.add(char)
            fast++
        } else {
            slow++
            fast++
        }
        longest = Math.max(longest, fast - slow)
    }
    return longest
}