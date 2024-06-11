// Leetcode Q26 - Remove Duplicates from Sorted Array
// I/P - [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// O/P - 5

const removeDuplicatesFn = (inputArr) => {
  if (inputArr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < inputArr.length; j++) {
    if (inputArr[j] !== inputArr[i]) {
      i++;
      inputArr[i] = inputArr[j];
    }
  }

  // resultant arr
  const resultantArr = inputArr.slice(0, i + 1);
  console.log(resultantArr);

  return i + 1;
};

console.log(removeDuplicatesFn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
