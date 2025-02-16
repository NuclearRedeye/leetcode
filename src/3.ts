function lengthOfLongestSubstring(s: string): number {
  let retVal = s.length === 0 ? 0 : 1;
  for (let i = 0; i < s.length; i++) {
      let buffer: string[] = [s[i]];
      for (let ii = i + 1; ii < s.length; ii++) {
          if (buffer.includes(s[ii])) {
              retVal = Math.max(retVal, buffer.length);
              break;
          }
          buffer.push(s[ii]);

          if (ii + 1 === s.length) {
            retVal = Math.max(retVal, buffer.length);
          }
      }
  }
  return retVal;
};

console.assert(lengthOfLongestSubstring("abcabcbb") === 3, "'abcabcbb' is 3");
console.assert(lengthOfLongestSubstring("bbbbb") === 1, "'bbbbb' is 1");
console.assert(lengthOfLongestSubstring("pwwkew") === 3, "'pwwkew' is 1");
console.assert(lengthOfLongestSubstring("au") === 2, "'au' is 2");