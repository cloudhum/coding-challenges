// https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/solutions/javascript

const closestMultiple10 = num => {
    return (num % 10) < 5 ? num - num % 10 : num + (10 - num % 10);
};

