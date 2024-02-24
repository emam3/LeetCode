function search(nums: number[], target: number): number {
    let start: number = 0;
    let end: number = nums.length -1;
    let mid: number;
    
    do {
        mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) {
            start = mid +1;
        } else {
            end = mid -1;
        }
    } while (start <= end)
        
        return -1
};