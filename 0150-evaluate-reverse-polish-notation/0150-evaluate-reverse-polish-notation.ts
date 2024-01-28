function evalRPN(tokens: string[]): number {
    
    if(tokens.length === 1) return Number(tokens[0]);

    let stack: number[] = [];
    
    let result: number = 0;
    
    for(let i = 0 ; i < tokens.length ; i++) {
        if (tokens[i] === '+') {
            const num1: number = stack.pop();
            const num2: number = stack.pop();
            result = num1 + num2;
            stack.push(result);
        } else if(tokens[i] === '-') {
            const num1: number = stack.pop();
            const num2: number = stack.pop();
            result = num2 - num1;
            stack.push(result);
        } else if(tokens[i] === '*') {
            const num1: number = stack.pop();
            const num2: number = stack.pop();
            result = num1 * num2;
            stack.push(result);
        } else if(tokens[i] === '/') {
            const num1: number = stack.pop();
            const num2: number = stack.pop();
            result = Math.trunc(num2 / num1)
            stack.push(result);
        } else {
            stack.push(Number(tokens[i]));
        }
    }
    
    return stack[0];
};