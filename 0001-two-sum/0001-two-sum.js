/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i =0 ; i< nums.length ; i++) {
        if(nums.includes(target-nums[i])) {
            let indexOfNum2 = nums.indexOf((target-nums[i]))
            if(indexOfNum2 == i) {
                continue
            }
            let arr = new Array(indexOfNum2,i)
            return arr
        } else {
            continue
        }
    }
};