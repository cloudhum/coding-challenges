// https://www.codewars.com/kata/5a34b80155519e1a00000009

function multipleOfIndex(array) {
    return array.filter((num, index) => {
        return (num % index == 0)
    })
}