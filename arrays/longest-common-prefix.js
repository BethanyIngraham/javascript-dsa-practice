/**
 * Problem: Longest Common Prefix
 * Difficulty: Easy
 *
 * Description:
 *  Write a function to find the longest common prefix 
 *  string amongst an array of strings.
 *  If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 *  Input: strs = ["flower","flow","flight"]
 *  Output: "fl"
 * 
 * Example 2:
 *  Input: strs = ["dog","racecar","car"]
 *  Output: ""
 *  Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 *  1 <= strs.length <= 200
 *  0 <= strs[i].length <= 200  
 *  strs[i] consists of only lowercase English letters if it is non-empty.
 *
 * Assumptions:
 *  - The prefix must exist in every word in strs array, starting at first char
 *  - There could be an empty array or one string
 *  - All letters are lowercase and in English
 *  - If there is no common prefix, return empty string
 *
 * Approach:
 *  1. If the array is empty return an empty string
 *  2. If the array only has one word, return that word
 *  3. Set the first word as the prefix
 *  4. Traverse through the rest of the words in the array
 *  5. Compare the prefix to the other words
 *  6. If there is no commonality, return an empty string
 *  7. Return longest prefix
 *
 * Time Complexity: 
 * Space Complexity: 
 *
 */
function longestCommonPrefix(strs) {
  if(strs.length === 0) return ""

  if(strs.length === 1) return strs[0]

  let prefix = strs[0];
  
}

// console.log(longestCommonPrefix(["flower","flow","flight"])) // Expected: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // Expected: ""
// console.log(longestCommonPrefix(["dog"])) // Expected: "dog"
// console.log(longestCommonPrefix([])) // Expected: ""


