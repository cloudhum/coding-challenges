// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
    let xArray = x.split(" ")
    let highestScore = 0
    let winner = ""
    for (let i = 0; i < xArray.length; i++) {
        let lettersArray = xArray[i].split("")
        let score = lettersArray.reduce((sum, letter) => {
            return sum + (letter.charCodeAt(0) - 96)
        }, 0)
        if (score > highestScore) {
            highestScore = score
            winner = xArray[i]
        }
    }
    return winner
}