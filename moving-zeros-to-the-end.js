// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr1) {
    let arr2 = [...arr1];

    for (let i = arr2.length - 1; i >= 0; i--) {
        if (arr2[i] === 0) {
            arr2.splice(i, 1);
            arr2.push(0);
        }
    }
    return arr2;
}

