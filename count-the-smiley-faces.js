// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let face = arr[i];
        if (face[0] == ":" || face[0] == ";") {
            if (face[1] == "-" || face[1] == "~") {
                if (face[2] == ")" || face[2] == "D") {
                    count++;
                }
            }
            else if (face[1] == ")" || face[1] == "D") {
                count++;
            }
        }
    }
    return count;
}