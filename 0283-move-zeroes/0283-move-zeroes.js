/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0
    let length = nums.length
    if(nums.length == 0) return nums
    while(i < length) {
        if(nums[i] == 0 ) {
            nums.push(nums.splice(i, 1))
            length--
            i--
        }
        i++
    }
};