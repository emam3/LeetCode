function findMin(nums: number[]): number {
    let l: number = 0;
    let r: number = nums.length-1;
    let m: number = Math.floor((r - l)/2);
    const isSorted: boolean = (nums[0] < nums[m]) && (nums[m] < nums[r]);
    if(isSorted) return nums[0];
    
    while (r > l) {
        m = Math.floor((r + l)/2);
        if(nums[m] > nums[r]) {
            l = m + 1;
        } else {
            r = m
        }
    }
    return nums[l]
};