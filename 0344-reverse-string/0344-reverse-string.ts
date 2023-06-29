/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let newArr: string[] = [];
    for(let i: number = s.length -1 ; i >= 0 ; i--) {
        newArr.push(s[i]);
    }
    
    s.length = 0;
    s.push(...newArr);
};