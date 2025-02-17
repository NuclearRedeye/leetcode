function longestPalindrome(s: string): string {
  let retVal = (s.length > 0) ? s[0] : "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let next = s.lastIndexOf(char);
    if ((s.length - i < retVal.length)) {
      break;
    }
    while (next > i) {
      
      const palindrome = s.substring(i, next + 1);
      const a = palindrome.substring(0, Math.floor(palindrome.length / 2));
      const b = palindrome.substring(palindrome.length - Math.floor(palindrome.length / 2));

      if (a === [...b].reverse().join('')) {
        if (palindrome.length > retVal.length) {
          retVal = palindrome;
        }
        break;
      }
      next = s.lastIndexOf(char, next - 1);
    }
  }
  return retVal;
};

console.assert(longestPalindrome('babad') === 'bab', "Longest Palindrome in 'babad' is 'bab");
console.assert(longestPalindrome('cbbd') === 'bb', "Longest Palindrome in 'cbbd' is 'bb");
console.assert(longestPalindrome('a') === 'a', "Longest Palindrome in 'a' is 'a");