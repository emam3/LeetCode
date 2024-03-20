function lengthOfLongestSubstring(s: string): number {
    let charSet = new Set();
    let l: number = 0;
    let maxLength: number = 0;
    for(let r: number = 0; r < s.length; r++) {
        while(charSet.has(s[r])) {
              charSet.delete(s[l]);
            l+=1;
        }
        charSet.add(s[r]);
        maxLength = Math.max(maxLength, r - l + 1);
    }
    
    return maxLength;
};