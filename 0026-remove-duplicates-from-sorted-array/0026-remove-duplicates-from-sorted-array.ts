function removeDuplicates(nums: number[]): number {
    let j: number = 0;
    let newNumbers: number[] = [];
    
    for(let i:number = 1 ; i < nums.length ; i++) { // [1,1,2]
        if(nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
            // newNumbers.push(nums[j]);
        }
    }    
    return (j+1);
};