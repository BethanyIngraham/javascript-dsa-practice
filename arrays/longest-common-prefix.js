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
 * Time Complexity: O(S) Worst case - visit every char in every str
 * Space Complexity: O(1) Same data structure - nothing extra
 * 
 * To Remember:
 *  - Very fast and returns early if necessary
 *  - indexOf(), substring(), and substring() vs slice()
 *  - look into vertical solution (this is horizontal scanning)
 */
function longestCommonPrefix(strs) {

  // If array is empty, there is no prefix to return
  if(strs.length === 0) return ""

  // If array contains one word, that is the longest prefix 
  if(strs.length === 1) return strs[0]

  // The whole first word is set as the starting prefix
  let prefix = strs[0];
  
  // (outer) loop through each word in array, starting with the second word
  for(let i = 1; i < strs.length; i++) {

    // (inner) loop while the current word does not start with prefix 
        // this returns 0 if entire prefix string is found at 
        // the beginning of the current word
    while(strs[i].indexOf(prefix) !== 0) {

        // cut off the last char in the prefix word
        prefix = prefix.substring(0, prefix.length - 1);

        // if no chars in prefix remain return empty str
        if(prefix === "") return ""
    }
  }

  // return whatever is left of prefix after checking every word
  return prefix 
}

console.log(longestCommonPrefix(["flower","flow","flight"])) // Expected: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // Expected: ""
console.log(longestCommonPrefix(["dog"])) // Expected: "dog"
console.log(longestCommonPrefix([])) // Expected: ""


