// Fibonacci series upto n-th term using recursion

const fibonacciFnRec = (n, f0, f1) => {
  if (f0 === 0 && f1 === 1) {
    console.log(f0);
    console.log(f1);
  }

  if (n > 1) {
    let fn = f0 + f1;
    console.log(fn);
    fibonacciFnRec(n - 1, f1, fn);
  }
};

console.log(fibonacciFnRec(10, 0, 1));

// Fibonacci series upto n-th term without using recursion

// const fibonacciFn = (n) => {
//   let f0 = 0;
//   let f1 = 1;

//   console.log(f0);
//   console.log(f1);

//   for (let i = 2; i <= n; i++) {
//     let fn = f0 + f1;
//     f0 = f1;
//     f1 = fn;
//     console.log(fn);
//   }
// };

// console.log(fibonacciFn(10));

// Time Complexity : O(n)
// Space Complexity : O(1)
