//https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(array1, array2) {
    let sum = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] == array1[i]) sum += 4;
        else if (array2[i] == "") sum += 0;
        else sum -= 1;
    }
    return sum < 0 ? 0 : sum;
}