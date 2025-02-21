function isPalindrome(x: number): boolean {
  const numberStr = x.toString();
  const until = Math.floor(numberStr.length / 2);
  for (let i = 0; i < until; i++) {
    if (numberStr[i] !== numberStr[numberStr.length - 1 - i]) {
        return false;
    }
  }
  return true;
};


console.assert(isPalindrome(121) === true, "'121' is a valid palidrome");
console.assert(isPalindrome(-121) === false, "'121' is not a valid palidrome");
console.assert(isPalindrome(10) === false, "'10' is a valid palidrome");