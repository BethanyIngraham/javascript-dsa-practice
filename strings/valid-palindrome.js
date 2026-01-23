/**
 * Problem: Valid Palindrome
 * Difficulty: Easy
 *
 * Description:
 *  A phrase is a palindrome if, after converting all 
 *  uppercase letters into lowercase letters and removing all
 *  non-alphanumeric characters, it reads the same forward 
 *  and backward. Alphanumeric characters include letters and numbers.
 * 
 *  Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Example 1:
 *  Input: s = "A man, a plan, a canal: Panama"
 *  Output: true
 *  Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 *  Input: s = "race a car"
 *  Output: false
 *  Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 *  Input: s = " "
 *  Output: true
 *  Explanation: s is an empty string "" after removing non-alphanumeric characters.
 *  Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 * Constraints:
 *  1 <= s.length <= 2 * 105
 *  s consists only of printable ASCII characters.
 *
 * Assumptions:
 * - strings must have lowercase letters or numbers
 * - strings must not have spaces or extra characters (ex. commas, etc.)
 * - when read backwards (right to left), the letters are 
 *      the same as when reading the strings from start 
 *      to finish (left to right)
 * - empty strings are palindromes
 *
 * Approach:
 * 1. Change the string into all lowercase letters, without
 *      spaces or non-alphanumeric characters
 * 2. If a string is empty, return true
 * 3. Compare the first and last letters of string
 * 4. If the current letters are not the same,
 *      return false
 * 5. If they are the same, move on to the next letters
 *      and continue comparing
 * 6. If the middle of the string is reached and all 
 *      the letters match, return true
 * 
 *
 * Time Complexity: 
 * Space Complexity: 
 *
 *
 */
function isPalindrome(s) {
 // solution 
}


// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
// console.log(isPalindrome("race a car")); // Expected: false
// console.log(isPalindrome("")); // Expected: true

// ORIGINAL APPROACH:
// 1. Transform every uppercase letter into a lowercase 
//    letter. If a letter is already lowercased, it stays the same
// 2. If the string is empty, return true
// 3. Get rid of any non alphanumeric character
// 4. Get rid of the spaces between each word to create one word-like string
// 5. Make a comparison of the given string and 
//    a reversed version to see if it is a palindrome
// 6. If they are exactly the same, return true. If not, return false.

// Reasons why not to use original approach:
// 1. Multiple modified strings are created taking up memory (space) -
//    one for the alphanumeric version and one for the reversed version
// 2. I am looping through the strings many times to change 
//    and make comparisons