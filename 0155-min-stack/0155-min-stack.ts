class MinStack {
    
    private stack: number[];
    private minNumber: number[];

    constructor() {
        this.stack = [];
        this.minNumber = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if(!this.minNumber.length || val <= this.minNumber[this.minNumber.length -1]) {
            this.minNumber.push(val)
        }
    }

    pop(): void {
        const holder:number = this.stack.pop();
        if(holder === this.minNumber[this.minNumber.length -1]) this.minNumber.pop()
    }

    top(): number {
        return this.stack[this.stack.length -1]
    }

    getMin(): number {
        return this.minNumber[this.minNumber.length -1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */