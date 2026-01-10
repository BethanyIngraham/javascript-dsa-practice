/**
 * LeetCode: Two Sum
 * Difficulty: Easy
 *
 * Problem:
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * You can return the answer in any order.
 *
 *  Example 1:
 *   Input: nums = [2,7,11,15], target = 9
 *   Output: [0,1]
 *   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *  Example 2:
 *   Input: nums = [3,2,4], target = 6
 *   Output: [1,2]
 *
 *  Example 3:
 *   Input: nums = [3,3], target = 6
 *   Output: [0,1]
 *
 * Assumptions:
 *   - return indices, not values
 *   - each input has one solution
 *   - can't use same element twice
 *   - arrays are not sorted
 *
 * Approach:
 * 1. keep track of first number
 * 2. keep track of second number (the one right after the first)
 * 3. add the value of both first and second numbers
 * 4. if they equal target, return indices of both
 * 5. if not, keep checking rest of numbers
 * 
 * Optimal Version:
 *  (Hash Map - > include reason why)
 * 
 * Patterns:
 *  (What to look for)
 * 
 * Time Complexity: O(n^2) -> brute force
 * Space Complexity: O(1)
 */

function twoSum(nums, target) {

    for(let i = 0; i < nums.length; i++){ 
        // outer loop tracks first num index
        for(let j = i + 1; j < nums.length; j++) { 
            // inner loop tracks second num index
            if(nums[i] + nums[j] === target) { 
                // add first and second numbers
                // compare to target
                // if they add up to target return indices of both
                return [i, j]
            }
        }
    }
        
}

// console.log('example 1 ->', twoSum([2,7,11,15], 9)); // Expected: [0,1]
// console.log('example 2 ->', twoSum([3,2,4], 6)); // Expected: [1,2]
// console.log('example 3 ->', twoSum([3,3], 6)); // Expected: [0,1]