// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url) {
    let indexOfAnchor = url.indexOf("#")
    if (indexOfAnchor == -1) return url
    return url.slice(0, indexOfAnchor)
}