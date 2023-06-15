function twoSum(nums: number[], target: number): number[] {
let firstIndex: number = 0;
let secondIndex: number = 0;

    if(nums.length == 2) return [0,1];
for(let i: number =0 ; i < nums.length ; i++) {
    if(nums.includes(target-nums[i])) {
        let i_2: number = nums.indexOf(target-nums[i])
        if(i_2 == i) {
            continue;
        } else {
            return [i , i_2]
        } 
    } else {
        continue;
    }
}
};