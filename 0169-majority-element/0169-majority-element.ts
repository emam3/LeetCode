function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  for (const num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }

  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

function majorityElement(nums: number[]): number {
    let elements: any = {};
    let n: number = Math.floor(nums.length);
    let sortedArr: number[] = quicksort(nums);
    return sortedArr[Math.floor(n/2)];
    
    
}
    

    
    // return Number(Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b));
    
