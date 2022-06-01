// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/javascript

function twoSort(s) {
    let sorted = s.sort()
    let firstElement = sorted[0]
    let result = ''

    for (letter in firstElement) {
        result += firstElement[letter]
        if (letter != firstElement.length - 1) result += "***"
    }
    return result
}