/*
A sorted array of unique integers was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array. All the numbers are unique.
*/

function findMinRotated(arr) {
    let left = 0
    let right = arr.length - 1
    let last_element = arr[arr.length - 1]
    let boundary_index = arr[0]

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid] < last_element) {
            boundary_index = mid
            right = mid - 1
        } else {
            left = left + 1
        }
    }
    return boundary_index
}