/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
    let newString = str.split(' ');
    for (let i = 0; i < newString.length; i++){
      newString[i] = newString[i].split('').reverse().join('');
    }
     return newString.join(' '); 
  }