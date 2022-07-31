// https://algo.monster/problems/move_zeros

function moveZeros(nums) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            let placeholder = nums[fast]
            nums[fast] = nums[slow]
            nums[slow] = placeholder
            slow++
        }
    }
}