// LeetCode 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.
const reverseString = function (s) {
  let startPointer = 0;
  let endPointer = s.length - 1;

  while (startPointer < endPointer) {
    let temp = s[startPointer];
    s[startPointer] = s[endPointer];
    s[endPointer] = temp;
    startPointer++;
    endPointer--;
  }

  return s;
};

console.log(reverseString(["a", "b", "c", "d"]));

console.log(reverseString(["c", "O", "P", "i", "L", "o", "T"]));
