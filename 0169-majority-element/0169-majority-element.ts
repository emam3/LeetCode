const insertionSort = (arr) => {
 for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr;
}

function majorityElement(nums: number[]): number {
    let elements: any = {};
    let n: number = Math.floor(nums.length);
    let sortedArr: number[] = insertionSort(nums);
    return sortedArr[Math.floor(n/2)];
    
    // for(let i:number = 0; i< nums.length ; i++) {
//         let num:number = nums[i];
        
//         if(elements[String(num)] !== undefined) {
//             elements[String(num)]++;
//             if(elements[String(num)] > n) return elements[String(num)]
//         } else {
//             elements[String(num)] = 0;
//         }
    
}
    

    
    // return Number(Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b));
    
