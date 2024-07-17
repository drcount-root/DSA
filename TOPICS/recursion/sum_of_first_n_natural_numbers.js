// Sum of first N numbers

const rfn = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + rfn(n - 1);
};
console.log(rfn(10));
