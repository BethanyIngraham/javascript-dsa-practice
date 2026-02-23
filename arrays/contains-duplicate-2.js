/**
 * LeetCode: Contains Duplicate II
 * Difficulty: Easy
 *
 * Description:
 *  Given an integer array nums and an integer k, 
 *  return true if there are two distinct indices i and j 
 *  in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * 
 * Example 1:
 *  Input: nums = [1,2,3,1], k = 3
 *  Output: true
 * 
 * Example 2:
 *  Input: nums = [1,0,1,1], k = 1
 *  Output: true
 * 
 * Example 3:
 *  Input: nums = [1,2,3,1,2,3], k = 2
 *  Output: false
 *
 * Constraints:
 *  1 <= nums.length <= 105
 *  -109 <= nums[i] <= 109
 *  0 <= k <= 105
 * 
 * Assumptions:
 *  - Array will never be empty
 *  - Numbers can be positive or negative
 *  - K will never be negative
 *  - Math.abs() always returns a positive num
 *  - Return true or false
 *  - Possible for there to be no duplicates
 *  - Both conditions must be met:
 *      - nums[i] == nums[j] AND
 *      - Math.abs(i - j) <= k
 *  - Possible to make several passes to not only:
 *      - find match but,
 *      - see if indices are less than or equal to k
 *     which wastes a lot of time! 
 *  - QUICK LOOKUP -> {} for num and index
 *  
 * Approach:
 *  1. Initiate empty object
 *  2. Loop through nums array 
 *  3. If current number is already in the object (duplicate found):
 *      3a. Make comparison of current idx and stored idx
 *      3b. If second condition, abs(i - j) <= k is met, return true
 *  4. Else, store number and its index in object
 *  5. If duplicate isn't found or condition not, met return false
 *
 * Time Complexity: O(n) 
 * Space Complexity: O(n) 
 * 
 * To Remember: 
 *  Focus on the most recent index of a number seen
 *  Update the object with latest index so it's 
 *      within distance k of a duplicate
 */

function containsNearbyDuplicate(nums, k) {

    // create object to store numbers and their index from nums array
    const numsObj = {};

    // loop through nums array
    for(let i = 0; i < nums.length; i++) {

        // determine what the current number is
        const currentNum = nums[i];

        // if this current num has already been seen...
        if(numsObj[currentNum] !== undefined) {
            // check the distance condition and return true if met
            if(i - numsObj[currentNum] <= k) return true
        }

        // update the object with the latest index
        numsObj[currentNum] = i;
    }

    // if the end of the array is reached or 
    // the distance condition is not met return false
    return false
}

// console.log(containsNearbyDuplicate([1,2,3,1], 3)) // Expected: true
// console.log(containsNearbyDuplicate([1,0,1,1], 1)) // Expected: true
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)) // Expected: false