/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n
        let middle = Math.floor((start+end)/2)
    
        while(start <= end) {
            if(!isBadVersion(middle)) {
                start = middle +1
            } else {
                end = middle-1
            }
            middle = Math.floor((start+end)/2)
        }  
        return start
    };
};