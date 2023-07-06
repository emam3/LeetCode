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
            let lineName: string = `${m},${c}`;
            if(lineName in lines) {
                lines[lineName].add(`${x1},${y1}`)
                lines[lineName].add(`${x2},${y2}`)
                maxNumber = Math.max(maxNumber, lines[lineName].size)
            } else {
                lines[lineName] = new Set()
                lines[lineName].add(`${x1},${y1}`)
                lines[lineName].add(`${x2},${y2}`)
                maxNumber = Math.max(maxNumber, lines[lineName].size)
            }
        }
    }
    
    return maxNumber;
};