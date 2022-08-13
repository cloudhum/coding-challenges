// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array) {
    let team1 = array.reduce((sum, num, index) => {
        if (index % 2 == 0) {
            return sum + num
        } else {
            return sum + 0
        }
    }, 0)

    let team2 = array.reduce((sum, num, index) => {
        if (index % 2 !== 0) {
            return sum + num
        } else {
            return sum + 0
        }
    }, 0)

    return [team1, team2]
}