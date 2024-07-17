// const stableSelectionSort = (arr) => {
//   return arr.sort((a,b) => a-b)
// };

// console.log(stableSelectionSort([3, 7, -4, 5, 2, 1, 9, 0]));

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([3, 7, -4, 5, 2, 1, 9, 0]));