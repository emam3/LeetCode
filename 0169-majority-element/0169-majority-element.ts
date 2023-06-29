function majorityElement(nums: number[]): number {
    let elements: any = {};
    let n: number = Math.floor(nums.length);
    
    for(let i:number = 0; i< nums.length ; i++) {
        let num:number = nums[i];
        
        if(elements[String(num)] !== undefined) {
            elements[String(num)]++;
            if(elements[String(num)] > n) return elements[String(num)]
        } else {
            elements[String(num)] = 0;
        }
    }
    
//     nums.map((num: number) => {
    
//         if(elements[String(num)] !== undefined) {
//             elements[String(num)]++;
//         } else {
//             elements[String(num)] = 0;
//         }
        
//     });
    
    return Number(Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b));
    
};