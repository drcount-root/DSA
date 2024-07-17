// Reverse a string using recursion

const reverseStringFn = (str) => {
  if (str.length <= 1) {
    return str;
  }

  return reverseStringFn(str.substring(1)) + str.charAt(0);
};

let str = "Hello";

console.log(reverseStringFn(str));
