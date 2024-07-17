// print 1 to n

const recursiveFn2 = (n) => {
  if (n === 0) {
    return;
  }
  recursiveFn2(n - 1);
  console.log(n);
};
console.log(recursiveFn2(5));
