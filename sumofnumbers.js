"use strict";
/**
 * Functions to compute the sum of numbers in an array using different methods.
 */
// Sum using a for-loop
function sumFor(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i += 1) {
        total += nums[i];
    }
    return total;
}
// Sum using a while-loop
function sumWhile(nums) {
    let total = 0;
    let i = 0;
    while (i < nums.length) {
        total += nums[i];
        i += 1;
    }
    return total;
}
// Sum using recursion
function sumRecursion(nums, index = 0) {
    if (index >= nums.length)
        return 0;
    return nums[index] + sumRecursion(nums, index + 1);
}
// Sum using functional programming (reduce)
function sumTheFunctionalWay(nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
// Test the functions
const numbers = [1, 2, 3, 4];
console.log(`sumFor: ${sumFor(numbers)}`);
console.log(`sumWhile: ${sumWhile(numbers)}`);
console.log(`sumRecursion: ${sumRecursion(numbers)}`);
console.log(`sumTheFunctionalWay: ${sumTheFunctionalWay(numbers)}`);
