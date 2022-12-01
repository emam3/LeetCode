/**
 * @param {string} s
 * @return {number}
 */

let romanSym = {
I :1,
V : 5,
X : 10,
L :50,
C : 100,
D :500,
M : 1000,
}
var romanToInt = function(s) {
    let counter = 0
    for(let i =0 ; i < s.length ; i++) {
        if(romanSym[s[i]] < romanSym[s[i+1]] && (i+1) < s.length) {
            counter-=(romanSym[s[i]])
        } else {
                 counter+=(romanSym[s[i]])
            }
    }
    return counter
};