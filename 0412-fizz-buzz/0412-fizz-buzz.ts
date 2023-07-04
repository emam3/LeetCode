function fizzBuzz(n: number): string[] {
    let arr: string[]= [];
    for(let i: number=0 ; i<n ; i++) {
        if((i+1)%3 ===0 && (i+1)%5 === 0) {
            arr[i] = "FizzBuzz";
        } else if((i+1)%3 ===0 && (i+1)%5 !== 0) {
            arr[i] = "Fizz";
        } else if((i+1)%3 !==0 && (i+1)%5 === 0) {
            arr[i] = "Buzz";
        } else {
            arr[i] = String(i+1);
        }
    }
    
    return arr
};