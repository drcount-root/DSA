// Check given string is palindrome or not using recursion

// APPROACH - 2 (Better)
const checkPalindromeFn = (i, str) => {
    if( i >= str.length / 2) {
        return true;
    }

    if(str[i] !== str[str.length - 1 - i]) {
        return false;
    }

    return checkPalindromeFn(i + 1, str);
}

console.log(checkPalindromeFn(0, 'palindrome'));
console.log(checkPalindromeFn(0, 'level'));

// Time complexity: O(n/2) => O(n) where n is the length of the input string
// Space complexity: O(1)


// APPROACH - 1

// const reversedStr = (str, revStr) => {
//   if (str.length > 0) {
//     revStr += reversedStr(str.substring(1), revStr) + str.charAt(0);
//   }
//   return revStr;
// };

// const checkPalFn = (str) => {
//   if (str.length <= 1) {
//     return true;
//   } else {
//     let cleanStr = "";

//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== " " && str[i] !== ".") {
//         cleanStr += str[i].toLowerCase();
//       }
//     }

//     const reversedString = reversedStr(cleanStr, "");
//     return cleanStr === reversedString;
//   }
// };

// console.log(checkPalFn("Too hot to hoot."));
// console.log(checkPalFn("racecar"));
// console.log(checkPalFn("hello"));
// console.log(checkPalFn("12345"));
// console.log(checkPalFn("a man a plan a canal panama"));
// console.log(checkPalFn(""));
// console.log(checkPalFn("k"));


// Time complexity: O(n) where n is the length of the input string
// Space complexity: O(n) for the recursive calls on the call stack
