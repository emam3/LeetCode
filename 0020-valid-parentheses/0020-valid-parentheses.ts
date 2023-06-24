function isValid(s: string): boolean {
const stack: string[] = [];
  for (const char of s) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        stack.push(char);
        break;
      case ')':
        if (stack.length === 0 || stack[stack.length - 1] !== '(') {
          return false;
        }
        stack.pop();
        break;
      case ']':
        if (stack.length === 0 || stack[stack.length - 1] !== '[') {
          return false;
        }
        stack.pop();
        break;
      case '}':
        if (stack.length === 0 || stack[stack.length - 1] !== '{') {
          return false;
        }
        stack.pop();
        break;
    }
  }

  return stack.length === 0;
    
};