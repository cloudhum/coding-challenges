// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr){
    let numCounts = arr.reduce((number, count) => {
      if (number[count] === undefined) {
        number[count] = 0
      }
      number[count]++
      return number
    }, {})
    return +Object.keys(numCounts).reduce((a, b) => numCounts[a] > numCounts[b] ? a : b);
  }
  