/**
 * @param {string} s
 * @return {boolean}
 */

let countVowel = (word) => {
    let counter = 0
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(let i=0 ; i < word.length ; i++) {
        if(vowels.includes(word[i])) {
            counter++
        }
    }
    console.log(counter)
    return counter;
}
var halvesAreAlike = function(s) {
    let mid = Math.floor(s.length/2)
    let a = s.slice(0,mid)
    let b = s.slice(mid,)

    let aCount = countVowel(a)
    let bCount = countVowel(b)
    if(aCount == bCount) return true
    else return false
};