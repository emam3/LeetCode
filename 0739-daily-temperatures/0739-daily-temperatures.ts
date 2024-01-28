function dailyTemperatures(temperatures: number[]): number[] {
    if(temperatures.length === 1) return [0];
    let result = new Array(temperatures.length).fill(0);
    let stack: { value:number, index: number }[] = [];
    
    for(let i = 0; i < temperatures.length; i++) { // i = 6
        const currentTemp: number = temperatures[i];

        
        while(stack.length > 0  && currentTemp > stack[stack.length - 1].value) {
            let {index} = stack.pop();
            result[index] = i - index;
        }

        
        
        stack.push({value: currentTemp, index: i});
    }
    
    return result;
};