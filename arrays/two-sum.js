/**
 * LeetCode: Two Sum
 * Difficulty: Easy
 *
 * Description:
 *  Given an array of integers nums and an integer target, 
 *  return indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution, 
 *  and you may not use the same element twice.
 *  You can return the answer in any order.
 *
 * Example 1:
 *  Input: nums = [2,7,11,15], target = 9
 *  Output: [0,1]
 *  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 *  Input: nums = [3,2,4], target = 6
 *  Output: [1,2]
 *
 * Example 3:
 *  Input: nums = [3,3], target = 6
 *  Output: [0,1]
 * 
 * Constraints:
 *  2 <= nums.length <= 104
 *  -109 <= nums[i] <= 109
 *  -109 <= target <= 109
 *   Only one valid answer exists.
 *
 * Assumptions:
 *   - return indices, not values
 *   - each input has one solution
 *   - can't use same element twice
 *   - arrays are not sorted
 *
 * Approach:
 *  Note - brute force was tried first
 *  1. Store nums already seen in hash map along with indices
 *  2. For current num, calculate complement num needed to reach target
 *  3. Check hash map to see if complement exists - return indices of both
 * 
 * Optimal Version:
 *  Hash Map - to remember what's already been seen
 *  instead of checking and comparing nums multiple times,
 *  as well as quick lookup 
 * 
 * Patterns:
 *  Data type - array
 *  Fast lookup - hash map
 *  
 * Time Complexity: O(n) - traverse array once
 * Space Complexity: O(n) - use of array and hash map
 */

function twoSum(nums, target) {
    
    // object stores numbers already seen and their indices
    const visited = {}; 

    // loop through nums array once
    for(let i = 0; i < nums.length; i++) { 
        // keep track of num currently on
        const currentNum = nums[i]; 
        // calculate num needed that when added to current num equals target
        const complementNum = target - currentNum; 
        
        // check to see if complement is already in visited
        // if yes, return indices of complement and current
        if(visited[complementNum] !== undefined) {
            return [visited[complementNum], i]
        }
        // if not, store current num as key and its idx 
        // as value in visited for later use
        visited[currentNum] = i; 
    }
}

  // console.log('example 1 ->', twoSum([2,7,11,15], 9)); // Expected: [0,1]
  // console.log('example 2 ->', twoSum([3,2,4], 6)); // Expected: [1,2]
  // console.log('example 3 ->', twoSum([3,3], 6)); // Expected: [0,1]