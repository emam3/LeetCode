function isHappy(n: number): boolean {
    let cycles: number[] = [];
    while(true) {
    let stringOfNums: string[] = String(n).split("")
    n = 0;    
    stringOfNums.map((num: string) => {
        n+= Math.pow(Number(num), 2)
    })
    
    if(n === 1) {
        return true;
    } else if (cycles.includes(n)) {
        return false;
    } else {
        cycles.push(n)
    }
    
    }
};