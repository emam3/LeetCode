function majorityElement(nums: number[]): number {
    let elements: any = {};
    nums.map((num: number) => {
        if(elements[String(num)] !== undefined) {
            elements[String(num)]++;
        } else {
            elements[String(num)] = 0;
        }
    });
    
    return Number(Object.keys(elements).reduce((a, b) => elements[a] > elements[b] ? a : b));
    
};