const mZ = function (arr) {
  let startPointer = 0;

  for (let endPointer = 0; endPointer < arr.length; endPointer++) {
    if (arr[endPointer] !== 0) {
      const temp = arr[startPointer];
      arr[startPointer] = arr[endPointer];
      arr[endPointer] = temp;

      startPointer++;
    }
  }

  return arr;
};

console.log(mZ([1, 0, 3, 0, 7]));
// [1, 3, 7, 0, 0]

console.log(mZ([0]));
// [0]
