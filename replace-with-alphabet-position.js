// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

function alphabetPosition(text) {
    return text.toUpperCase().replace(/[^a-z]/gi, '').split('').map(x=>{
      return x.charCodeAt() - 64
    }).join(' ')
  }