/**
 * @param {number[]} nums
 * @return {number[]}
 */

const square = (nums) => {
    arr = nums.map(num => {
        return num*num
    })
    return arr
}

let bubbleSort = (arr) => {
    for(let i=0 ; i<arr.length ; i++) {
        for(let j=i+1 ; j<arr.length ; j++) {
            if(arr[j] < arr[i]) {
                let holder = arr[i]
                arr[i] = arr[j]
                arr[j] = holder    
            }//  i    j
        }   //   3    1    9
    }
    return arr
}

var sortedSquares = function(nums) {
    let squares = (square(nums))
    let sorted = bubbleSort(squares)
    console.log(sorted)
    return sorted
};