interface line {
    m: any,
    c: number,
    numberOflines: number
}

function maxPoints(points: number[][]): number {
    if(points.length === 2) return 2;
    else if(points.length === 1) return 1;
    let lines = {}
    let maxNumber: number = 0;

    for(let i:number = 0; i< points.length ; i++) {
        const [x1,y1] = points[i];
        for(let j:number = i+1; j< points.length ; j++) {
            if(j === i) continue;
            const [x2,y2] = points[j];
            let m: any;
            let c: number;
            if((x2-x1) === 0) {
                m = 'undefined';
                c = x1;
            } else {
                m = (y2-y1)/(x2-x1);
                c = y1 - (m*x1);
            }
            // let lineName: string = `${m},${c}`;
            if(`${m},${c}` in lines) {
                lines[`${m},${c}`].add(`${x1},${y1}`);
                lines[`${m},${c}`].add(`${x2},${y2}`);
                maxNumber = Math.max(maxNumber, lines[`${m},${c}`].size);
            } else {
                lines[`${m},${c}`] = new Set()
                lines[`${m},${c}`].add(`${x1},${y1}`);
                lines[`${m},${c}`].add(`${x2},${y2}`);
                maxNumber = Math.max(maxNumber, lines[`${m},${c}`].size);
            }
        }
    }
    
    return maxNumber;
};