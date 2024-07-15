const revStr = (str) => {
  console.log(str);

  const add = (s, c) => {
    return s + c;
  };

  if (str === null || str.length <= 1) {
    return str;
  }

  return add(revStr(str.substring(1)), str.charAt(str));

  // if(step <= s.length){
  //     newStr += s[s.length - step];
  //     step++
  //      revStr(s, newStr, step)
  // }else{
  //     console.log(newStr)
  //     return newStr
  // }
};

revStr("Hello");
// revStr("Hello", "", 1);
// console.log()

// // reverse an array using recursion
// var revFn = function (arr, res) {
//     if (arr.length !== 0) {
//         res.push(arr[arr.length - 1]);
//         arr.splice(arr.length - 1, 1);
//         revFn(arr, res);
//     }
//     return res;
// };
// console.log(revFn([1, 5, 3, 2, 4], []));

// // Sum of first N numbers
// const rfn = (n) => {
//   if (n === 0) {
//     return 0;
//   }
//   return n + rfn(n - 1);
// };
// console.log(rfn(10));
// // print 1 to n
// const recursiveFn2 = (n) => {
//   if (n === 0) {
//     return;
//   }
//   recursiveFn2(n - 1);
//   console.log(n);
// };
// console.log(recursiveFn2(5));
// // print n to 1
// const recursiveFn = (n) => {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   recursiveFn(n - 1);
// };
// console.log(recursiveFn(5));
