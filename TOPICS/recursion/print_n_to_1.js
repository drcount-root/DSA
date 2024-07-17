// print n to 1

const recursiveFn = (n) => {
  if (n === 0) {
    return;
  }
  console.log(n);
  recursiveFn(n - 1);
};

console.log(recursiveFn(5));
