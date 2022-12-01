/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length-1
    let middle = Math.floor((start+end)/2)
    
    while(nums[middle]!==target && start <= end) {
        if(nums[middle] < target) {
            start = middle +1
        } else {
            end = middle-1
        }
        middle = Math.floor((start+end)/2)
    }
    
    if(nums[middle] === target){    
        return middle;
    } else if(nums[middle] > target) {
        return middle -1
    } else {
        return middle +1
    }
    
};