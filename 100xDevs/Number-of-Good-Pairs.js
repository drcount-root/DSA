/*

1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0


Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

const numIdenticalPairs = (nums) => {
  let count = 0;
  let frequencies = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (frequencies[nums[i]]) {
      count += frequencies[nums[i]];
      frequencies[nums[i]]++;
    } else {
      frequencies[nums[i]] = 1;
    }
  }
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

console.log(numIdenticalPairs([1, 1, 1, 1]));

console.log(numIdenticalPairs([1, 2, 3]));


/*
Time Complexity: O(n), where n is the length of the array. We iterate through the array once to count the good pairs.
Space Complexity: O(n), where n is the length of the array. In the worst case, we store n unique numbers in the frequency map.
*/