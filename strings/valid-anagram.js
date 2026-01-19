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
 *  3. Store the letters from string s and their frequency in obj
 *  4. Using string t, subtract letter occurence from s obj
 *  5. If a letter does not exist in obj or more letters are found
 *         return false
 *  6. If anagram is found return true
 * 
 * Time Complexity: O(n) 
 * Space Complexity: O(1)
 * 
 * To Remember: 
 *  Frequency counter 
 *  Optimization - Making use of one object for two purposes
 *  Use of less memory and fewer loops
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

  // object stores letters and their frequency of string s
  const letterCount = {};

  // loop through string s 
  // if letter already exists in obj increase count by 1
  // else set letter as key and its value at 1
  for(let i = 0; i < s.length; i++) {
    let char = s[i];
   if(letterCount[char]) {
    letterCount[char]++;
   } else {
    letterCount[char] = 1;
   }
  }

  // loop through string t
  // if a letter does not exist or is already at zero, meaning there
  // is an extra letter in t - return false
  // for every letter, decrement their value in the letterCount obj
  for(let i = 0; i < t.length; i++) {
    let char = t[i];
    if(!letterCount[char] || letterCount[char] === 0) {
        return false
    }
    letterCount[char]--; 
  }

  // the loop has finished and string t is an anagram of string s
  return true
}

// console.log(isAnagram("anagram","nagaram")); // Expected: true
// console.log(isAnagram("rat","car")); // Expected: false
// console.log(isAnagram("hellogoodbye", "hello")); // Expected: false
// console.log(isAnagram("", "")); // Expected: true

/**
 * Original Solution:
 
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
 */