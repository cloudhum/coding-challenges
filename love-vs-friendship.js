// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string) {
    return string
        .toUpperCase()
        .split('')
        .reduce((sum, el) => {
            return sum + (el.charCodeAt() - 64)
        }, 0)
}