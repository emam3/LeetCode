/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var rotate = function (nums, k) {
    if(k > nums.length) k=k%nums.length
    const reverse = (start,end) => {
    while (start < end) {
        let holder = nums[start]
        nums[start] = nums[end]
        nums[end] = holder
        start++
        end--
    }
}

reverse(0,nums.length-1)
reverse(0,k-1)
reverse(k,nums.length-1)

    
};