// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

function index(array, n) {
    return n > array.length - 1 ? -1 : array[n] ** n;
}