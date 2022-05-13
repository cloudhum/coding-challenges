//https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, multiples) {
    let z = [];
    for (let i = x; z.length < multiples; i += x){
      z.push(i);
    }
    return z;
  }