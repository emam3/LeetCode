function minEatingSpeed(piles: number[], h: number): number {
    
    let start: number = 1;
    let end: number = Math.max(...piles);
    let neededHours: number = end;
    
    while(start <= end) {
        let mid: number = Math.floor((start + end)/2);
        let hours: number = 0;
        for(let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i]/mid)
        }
        
        if(hours <= h) {
            neededHours = Math.min(neededHours, mid);
            end = mid - 1
        } else start = mid + 1;
    }
    
    return neededHours
    
};