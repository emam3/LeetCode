/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x + ''
    let range = Math.pow(2,31)
    let result = []
    if(x[0] == '-') {
        result.push(x[0])
        x = x.slice(1)
    }
    
    while(true) {
        result.push(x.slice(-1))
        x = x.slice(0,-1)
        if(x.length == 0) break
    }
    let string = result.join("")
    if ( string >= -range && string <= range-1) return (string) 
    else return 0
};

// 2147483648