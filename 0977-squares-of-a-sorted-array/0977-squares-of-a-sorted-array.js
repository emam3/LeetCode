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

// let bubbleSort = (arr) => {
//     for(let i=0 ; i<arr.length ; i++) {
//         for(let j=i+1 ; j<arr.length ; j++) {
//             if(arr[j] < arr[i]) {
//                 let holder = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = holder    
//             }//  i    j
//         }   //   3    1    9
//     }
//     return arr
// }

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

var sortedSquares = function(nums) {
    let squares = (square(nums))
    let sorted = mergeSort(squares)
    console.log(sorted)
    return sorted
};