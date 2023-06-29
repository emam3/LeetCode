function missingNumber(nums: number[]): number {
    let n: number = nums.length;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = nums.reduce(reducer);

const actuallSum: number = n*(n+1)/2;
    return actuallSum-sum;
};