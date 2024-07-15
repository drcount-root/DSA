const isPalindrome = (str) => {
  let originalStr = "";
  let reverseStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "." && str[i] !== "," && str[i] !== ":" && str[i] !== ";") {
      originalStr += str[i];
    }
  }

  for (let i = originalStr.length - 1; i >= 0; i--) {
    reverseStr += originalStr[i];
  }

  return originalStr.toLowerCase() === reverseStr.toLowerCase();
};

console.log(isPalindrome("Too hot to hoot."));
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("level"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));

