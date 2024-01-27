function isValid(s: string): boolean {
    let stack: string[] = [];
    
    for(let i: number = 0 ; i < s.length ; i++) {
        stack.push(s[i]);
        if((stack[stack.length -1] === ')' && stack[stack.length -2] === '(') ||
          (stack[stack.length -1] === ']' && stack[stack.length -2] === '[') ||
          (stack[stack.length -1] === '}' && stack[stack.length -2] === '{')) {
            stack.pop();
            stack.pop();

        }  
    }
    
    return stack.length === 0
};