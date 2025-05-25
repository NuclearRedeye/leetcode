function longestPalindrome(words: string[]): number {
  let retVal = 0;

  const unique: Set<number> = new Set<number>(); 
  const pairs: Set<number> = new Set<number>();
  
  for (let i = 0; i < words.length; i++) {
    if (pairs.has(i)) {
      continue;
    }

    if (words[i][0] === words[i][1] && words[i][1] === words[i][0]) {
      unique.add(i);
    }

    for (let ii = i + 1; ii < words.length; ii++) {

      if (pairs.has(ii)) {
        continue;
      }

      if (words[i][0] === words[ii][1] && words[i][1] === words[ii][0]) {

        if (unique.has(i)) {
          unique.delete(i);
        }

        pairs.add(i);
        pairs.add(ii);
        break;
      }
    }
  }

  if (unique.size >= 1) {
    retVal += 2;
  }

  retVal += pairs.size * 2;

  return (retVal);
};

console.assert(longestPalindrome(["lc","cl","gg"]) === 6, `["lc","cl","gg"] results in 6`);
console.assert(longestPalindrome(["ab","ty","yt","lc","cl","ab"]) === 8, `["ab","ty","yt","lc","cl","ab"] results in 8`);
console.assert(longestPalindrome(["cc","ll","xx"]) === 2, `["cc","ll","xx"] results in 2`);
console.assert(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]) === 22, `["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"] results in 22`);

