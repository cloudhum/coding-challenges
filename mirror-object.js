// https://www.codewars.com/kata/586305e8916e244b66001a93/train/javascript

const mirror = obj => {
    // use the spread operator to make copy of our object so we don't modify the original
    let objCopy = { ...obj }
    // for each propery in our object, set it's value to the reverse of the property name (abc: cba)
    for (property in objCopy) {
        objCopy[property] = property.split("").reverse().join("");
    }
    return objCopy;
};