// https://www.codewars.com/kata/58d76854024c72c3e20000de

function reverse(str) {
    if (str.trim() == "") return ""
    let strArr = str.split(" ")
    return strArr
        .map((word, index) => {
            if (index % 2 == 0) return word
            return word.split("").reverse().join("")
        })
        .join(" ")
}