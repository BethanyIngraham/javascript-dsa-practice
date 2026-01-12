/**
 * LeetCode: Contains Duplicate
 * Difficulty: Easy
 *
 * Problem:
 *  Given an integer array nums, return true if any value 
 *  appears at least twice in the array, and return false 
 *  if every element is distinct.
 * 
 * Example 1:
 *  Input: nums = [1,2,3,1]
 *  Output: true
 * 
 * Explanation:
 *  The element 1 occurs at the indices 0 and 3.
 * 
 * Example 2:
 *  Input: nums = [1,2,3,4]
 *  Output: false
 * 
 * Explanation:
 *  All elements are distinct.
 * 
 * Example 3:
 *  Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *  Output: true
 * 
 * Constraints:
 *  1 <= nums.length <= 105
 *  -109 <= nums[i] <= 109
 * 
 * Assumptions:
 *  - Array can be empty
 *  - Return true or false rather than value or index
 * 
 * Approach:
 *  1. Create set to store unique values
 *  2. Check array for duplicates
 *  3. If numbers are unique store in set
 *  4. If duplicate is found return true
 *  5. No duplicates found, return false
 *
 * 
 * Patterns:
 *  Checking for duplicate existence fast
 *  Don't need extra information
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * To Remember:
 *  Set - a collection of unique items; it automatically prevents duplicates
 *      Use for this problem: checking if an element exists in a collection
 *      Have I seen this value before?
 *      Better for this scenario than frequency map or brute force (see below)
 */

function containsDuplicate(nums) {

    // create empty object to store unique numbers already visited
    const visited = new Set();

    // loop once through array considering value only
    for(let num of nums) {
        // check if number is already in visited set
        if(visited.has(num)) {
            // return true early, number is already in set
            // can't add duplicate
            // duplicate has been found 
            return true 
        }
        // this runs when current number is not already in set
        // add to set
        visited.add(num);
    }
    // loop has finished without duplicate being found in array
    return false
}

// console.log(containsDuplicate([1,2,3,1])) // Expected: True
// console.log(containsDuplicate([1,2,3,4])) // Expected: False
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // Expected: True


 // BRUTE FORCE SOLUTION
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i + 1; j < nums.length; j++) {
    //         if(nums[i] === nums[j]) {
    //             return true
    //         }
    //     }
    // }

    // return false

// FREQUENCY MAP SOLUTION
    // const count = {};

    // for(let num of nums) {
    //     if(count[num] === undefined) {
    //         count[num] = 1;
    //     } else {
    //         count[num]++
    //         return true
    //     }
    // }

    // return false
