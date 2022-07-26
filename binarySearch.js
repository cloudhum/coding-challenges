function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = left + Math.floor(right - left / 2)
        if (arr[mid] == target) return mid

        if (arr[mid] < target) {
            left++
        } else if (arr[mid] > target) {
            right--
        }
    }
    return -1;
}