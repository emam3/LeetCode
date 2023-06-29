/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let newArr: string[] = [...s];
    let j: number = s.length -1;

    for(let i:number = 0; i < s.length ; i++) {
        s[i] = newArr[j];
        j--;
    }
};