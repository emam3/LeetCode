function containsDuplicate(nums: number[]): boolean {
    const counter = {}
    for(let i: number=0 ; i < nums.length ; i++) {
        if(!counter[nums[i]]) {
            counter[nums[i]] = 1;
        } else return true
    }
    return false;
};