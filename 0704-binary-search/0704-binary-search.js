/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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
    }
    return -1;
};


// -1   0   3   5   9   12
//                 ....
//  0   1   2   3   4    5