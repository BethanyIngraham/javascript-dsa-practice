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
 *  - Looking for the the number at index n from the start of the sequence,
 *      which starts at 0 and 1
 * 
 * Approach:
 * 1. Create object to store nth index and value for every call
 * 2. Check object to see if n key and its value are already stored
 * 3. If not, check to see if base case has been met
 * 4. Store nth value in obj by adding the two numbers before it and store its key
 * 5. When the nth index is reached, return it's value
 * 
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
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function fib(n, memo = {}) { // Memoization Solution 

    // the memo obj is passed through every call
        // so they all have access to the same information
    // reduces the amount of calculations made 
    // quick lookup

    // check memo object to see if n is already stored in it
    // have we already seen this before? If yes, return the value
    if(n in memo) return memo[n];
    
    // base case - if it's the 0th or 1st index return 0 or 1
    if(n <= 1) return n;

    // recursive calls keep calling until a base case is reached
    // then it sends up the result from those stacked calls 
    // calculates the sum of previous and current numbers and assigns
        // it to a key in memo obj
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    // return the value of the nth index key 
    return memo[n];
  }

console.log(fib(2)) // Expected: 1
console.log(fib(3)) // Expected: 2
console.log(fib(4)) // Expected: 3

/**
 Original Approach:

 // base case
  if(n === 0) return 0
  if(n === 1) return 1

  // recursion 
  return fib(n - 1) + fib(n - 2)

  The problem - makes too many calls as it approaches 
  the base case and creates a lot of calculations. The larger
  the number of n, the more calls it makes. 

  Time Complexity - O(2^n) very slow due to increase in n and 
  amount of function calls

  Space Complexity - O(n) due to amount of function calls on the
  stack which is n
 */

  /** 
   
    // Iterative Solution

    // base case 
    if(n < 2) return n

    // previous number starts at 0
    let prev = 0;

    // current number starts at 1
    let cur = 1;

    // loop through the numbers starting after 0 and 1 
    // up through the nth index
    for(let i = 2; i <= n; i++) {
        // take your two previous numbers and move them
        // up one position by swapping - they each become the next value
        [prev, cur] = [cur, prev + cur]
    }

    // b is the number at the nth index
    return cur

    Time Complexity - O(n)
    Space Complexity - O(1)
   */