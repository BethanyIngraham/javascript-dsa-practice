/**
 * Problem: Valid Anagram
 * Difficulty: Easy
 *
 * Description:
 *  Given two strings s and t, return true if t is 
 *  an anagram of s, and false otherwise.
 * 
 * Anagram - An anagram is a word or phrase formed by 
 *  rearranging the letters of a different word or phrase,
 *  using all the original letters exactly once.
 * 
 * Example 1:
 *  Input: s = "anagram", t = "nagaram"
 *  Output: true
 * 
 * Example 2:
 *  Input: s = "rat", t = "car"
 *  Output: false
 * 
 * Constraints:
 *  1 <= s.length, t.length <= 5 * 104
 *  s and t consist of lowercase English letters.
 *
 * Assumptions:
 *  - If the letters in string s are rearranged they will form string t
 *  - All original letters are used only once 
 *  - All letters are lowercase
 *  - The length of each string should be the same
 *  - Order of letters does not matter
 *  - Strings can be empty
 *  - A boolean (true or false) will be returned
 *
 * Approach:
 *  1. If both strings are empty return true
 *  2. If strings have different lengths return false
 *  3. Store the letters from the original string and their frequency
 *  4. Store the letters from the second string and their frequency
 *  5. Make comparison of both strings
 *  6. If they match completely, return true
 *  7. If not, return false
 * 
 * Time Complexity: O(n) 
 * Space Complexity: O(1)
 * 
 * To Remember: 
 *  Frequency counter 
 *  How to compare basic value objects
 *    Compare content not reference
 * 
 * Follow up: 
 *  What if the inputs contain Unicode characters? 
 *  How would you adapt your solution to such a case?
 */
function isAnagram(s,t) {

  // if both strings are empty return true
  if(s === "" && t === "") return true 

  // if strings have different lengths return false
  if(s.length !== t.length) return false

  // create empty object to store letters of 
  // strings and their frequency
  const letterCountS = {}; 
  const letterCountT = {};

  // loop through string s 
  // if letter already exists in obj increase count by 1
  // else set letter as key and its value at 1
  for(let i = 0; i < s.length; i++) {
    let char = s[i];
   if(letterCountS[char]) {
    letterCountS[char]++
   } else {
    letterCountS[char] = 1
   }
  }

  // loop through string t 
  // if letter already exists in obj increase count by 1
  // else set letter as key and its value at 1
  for(let i = 0; i < t.length; i++) {
    let char = t[i];
   if(letterCountT[char]) {
    letterCountT[char]++
   } else {
    letterCountT[char] = 1
   }
  }
  
  // loop through original string object
  // for each letter, make sure it exists in the comparison
  // string object and that their values are the same
  // if not, return false
  for(letter in letterCountS) {
    if(letterCountS[letter] !== letterCountT[letter]) {
        return false
    }
  }

  // if everything matches after the loop, letters and values, return true
  return true
  
}

// console.log(isAnagram("anagram","nagaram")); // Expected: true
// console.log(isAnagram("rat","car")); // Expected: false
// console.log(isAnagram("hellogoodbye", "hello")); // Expected: false
// console.log(isAnagram("", "")); // Expected: true

