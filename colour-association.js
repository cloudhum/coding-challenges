// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript

function colourAssociation(array) {
    let result = []
    array.forEach(arr => {
        let obj = {}
        obj[arr[0]] = arr[1]
        result.push(obj)
    })
    return result
}