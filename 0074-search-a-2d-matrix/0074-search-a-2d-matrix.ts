const binarySearch = (nums: number[], target: number): number => {
    
    if(nums.length === 1 && target === nums[0]) return 0
    let start: number = 0;
    let end: number = nums.length -1;
    
    do {
        let mid = Math.floor(start + (end - start) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) {
            start = mid +1;
        } else {
            end = mid -1;
        }
    } while (start <= end)
        
        return -1
}

function searchMatrix(matrix: number[][], target: number): boolean {
    
    for(let i: number = 0; i < matrix.length; i++) {
        const result: number = binarySearch(matrix[i], target);
        if(result >= 0) return true;
    }
    
    return false
};