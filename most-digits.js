// https://www.codewars.com/kata/58daa7617332e59593000006/javascript

function findLongest(array) {
    const lengths = array.map(x => {
        return ("" + x).length
    });
    const max = Math.max(...lengths)
    return array[lengths.indexOf(max)]
}
