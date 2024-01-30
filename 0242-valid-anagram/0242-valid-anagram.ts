function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    
    let sObj = {};
    let tObj = {};
    for(let i: number = 0 ; i < s.length ; i++) {
        if(!sObj[s[i]]) sObj[s[i]] = 1;
        else sObj[s[i]]++;
    }
    
    for(let i: number = 0 ; i < t.length ; i++) {
        if(!tObj[t[i]]) tObj[t[i]] = 1;
        else tObj[t[i]]++;
    }
    
    for (let key in tObj) {
        if(tObj[key] !== sObj[key]) return false;
    }
    
    return true;
};