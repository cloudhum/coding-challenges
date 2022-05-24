// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript

function findShort(s) {
    let lengths = s.split(' ').map(x => x.length).sort((a, b) => a - b);
    return lengths[0]
}