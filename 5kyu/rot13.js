/* How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

Test examples:

"EBG13 rknzcyr." -->
"ROT13 example."

"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"

 */

function rot13(str) {
    let index;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let notIncluded = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "?", "!",
        " ", ".", "@", ":", "(", ")", "[", "]", "{", "}", "`", "\\",
        "*", ":", ",", "'", "#", ";", "+", "|", "~", "%", "$", "^",
        "<", ">", "_", "=", "-", "#", "&", "/", "\"", "\n"];

    alphabet = alphabet.split('');
    rot13 = rot13.split('');
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (notIncluded.indexOf(str[i]) == -1) {
            index = alphabet.indexOf(str[i]);
            str[i] = rot13[index];
        }
    }

    return str.join('');
}