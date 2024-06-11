// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

function strStr(haystack, needle) {
  if (!needle) {
    return 0;
  }

  if (!haystack) {
    return -1;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return i;
    }
  }

  return -1;
}

// Example usage:
let haystack1 = "sadbutsad";
let needle1 = "sad";
console.log(strStr(haystack1, needle1)); // Output: 0

let haystack2 = "leetcode";
let needle2 = "leeto";
console.log(strStr(haystack2, needle2)); // Output: -1

// ########### by built-in method ###########
let haystack = "leetcode";
let needle = "leeto";
console.log(haystack.indexOf(needle)); // Output: -1

let haystack_x = "leetcode";
let needle_x = "leeto";
console.log(haystack_x.indexOf(needle_x)); // Output: -1
