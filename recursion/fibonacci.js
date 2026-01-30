/**
 * LeetCode: Fibonacci Number
 * Difficulty: Easy
 *
 * Description:
 *  The Fibonacci numbers, commonly denoted F(n) form a sequence, 
 *  called the Fibonacci sequence, such that each number is the 
 *  sum of the two preceding ones, starting from 0 and 1. That is,
 * 
 *      F(0) = 0, F(1) = 1
 *      F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 *   Given n, calculate F(n).
 * 
 * Example 1:
 *  Input: n = 2
 *  Output: 1
 *  Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * Example 2:
 *  Input: n = 3
 *  Output: 2
 *  Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * Example 3:
 *  Input: n = 4
 *  Output: 3
 *  Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * Constraints:
 *  0 <= n <= 30
 *
 * Assumptions:
 *  - Each number is the sum of the two proceeding numbers
 *  - F(n) = F(n - 1) + F(n - 2) means that the current called number
 *      is the sum of the previous number and the one before that
 *  - The sequence starts with 0 and 1
 *  - It does not contain negative numbers
 *  - 0 1 1 2 3 5 8 13 21 34 are the first 10 numbers
 *  - F(0) = 0 F(1) = 1 
 *  - 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, and so on...
 *  - So, F(2) is like calling the result of F(1) plus the result of F(0)
 * 
 * Approach:
 * 
 * Patterns:
 *  - Recursion is when a function calls itself repeatedly until
 *      a result is returned or a base case is reached
 *  - The problem is made up of identical, smaller sub problems
 *  - Recursion or iteration can be used to solve a problem, however
 *      when the data structure is made up of smaller versions of
 *      itself, recursion is better 
 *  - Without a base case, the function would never stop calling itself
 * 
 * Time Complexity: TBD
 * Space Complexity: TBD
 */

function fib(n) {

  // base case

  // recursion 

  // return

  }

// console.log(fib(2)) // Expected: 1
// console.log(fib(3)) // Expected: 2
// console.log(fib(4)) // Expected: 3

