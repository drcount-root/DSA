const stableSelectionSort = (arr) => {
  return arr.sort((a,b) => a-b)
};

console.log(stableSelectionSort([3, 7, -4, 5, 2, 1, 9, 0]));