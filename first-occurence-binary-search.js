/*
    Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.
*/

function findFirstOccurrence(arr, target) {
    let left = 0
    let right = arr.length - 1
    let boundary_index = -1

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] == target) {
            boundary_index = mid
            right = mid - 1
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        if (arr[mid] > target) {
            right = mid - 1
        }
    }
    return boundary_index
}