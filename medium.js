// Suppose an array sorted in ascending order is rotated at some pivot unknown to you
// beforehand. (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).
// You are given a target value to search.If found in the array return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
//     Hint:  Use a function. Use the built in method.indexOf() and / or  for loops.Review your lesson on 
// Arrays to aid in working through this problem. 


const array = [4, 5, 6, 7, 0, 1, 2];
function myFunc(x) {
    return array.indexOf(x)

}

console.log(myFunc(0))