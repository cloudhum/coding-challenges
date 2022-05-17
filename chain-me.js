// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/javascript

function chain(input, fs) {
    for (let i = 0; i < fs.length; i++) {
        input = fs[i](input);
    }
    return input;
}