const findPossibleCombinations = (input) => {
  let res = [];

  const backTrackFn = (str, open, close) => {
    if (str.length === input * 2) {
      res.push(str);
      return;
    }

    if (open < input) {
      backTrackFn(str + "(", open + 1, close);
    }

    if (close < open) {
      backTrackFn(str + ")", open, close + 1);
    }
  };

  backTrackFn("", 0, 0);
  return res;
};

// Test cases
console.log(findPossibleCombinations(0)); // Output: []
console.log(findPossibleCombinations(1)); // Output: ['()']
console.log(findPossibleCombinations(2)); // Output: ['(())', '()()']
console.log(findPossibleCombinations(3)); // Output: ['((()))', '(()())', '(())()', '()(())', '()()()']


/*
Time complexity: O(2^n) - where n is the input to the function. This is because for each open parenthesis, there are two possible choices - add a close parenthesis or not.

Space complexity: O(n) - the maximum depth of the recursion is n, and the function uses O(n) space to store the string.
*/
