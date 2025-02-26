function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let common = strs[0];
  for (let i = 1; i < strs.length && common.length > 0; i++) {
      for (let ii = 0; ii < common.length; ii++) {
          if (ii >= strs[i].length || common[ii] !== strs[i][ii]) {
              common = common.substring(0, ii);
              break;
          }
      }
  }
  return common;
};

console.assert(longestCommonPrefix(["flower","flow","flight"]) === "fl");
console.assert(longestCommonPrefix(["dog","racecar","car"]) === "");
console.assert(longestCommonPrefix(["ab", "a"]) === "a");