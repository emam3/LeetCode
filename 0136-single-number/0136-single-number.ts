function singleNumber(nums: number[]): number {
    let hasDuplicate: boolean = false;
    if(nums.length === 1) return nums[0];
    else {
        let counter: number = nums.length-1;
        while(counter >= 0) {
            const clonedArray = nums.slice(0, counter).concat(nums.slice(counter + 1));
            if(clonedArray.indexOf(nums[counter]) === -1) {
                return nums[counter];
            }
            counter--;
        }
    }
};