// Factorial of a number using recursion

const factorialFn = (num) => {
  let fact = 1;

  if (num > 1) {
    fact = num * factorialFn(num - 1);
  }

  return fact;
};

console.log(factorialFn(5)); // 120
console.log(factorialFn(0)); // 1
console.log(factorialFn(1)); // 1
console.log(factorialFn(2)); // 2
