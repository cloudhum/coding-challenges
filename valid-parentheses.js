// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
    let map = { "(": ")", "{": "}", "[": "]" }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let value = s[i]
        // if we reach an open paren push its corresponding closing paren to our stack
        if (map[value]) {
            stack.push(map[value])
            // if we reach a closing paren, see if it matches stack.pop()
        } else if (value !== stack.pop()) {
            return false
        }
    }
    return stack.length == 0 ? true : false
};