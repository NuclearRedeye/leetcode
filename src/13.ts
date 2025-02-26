const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const values = [1, 5, 10, 50, 100, 500, 1000];

function romanToInt(s: string): number {
  let retVal = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      const indexA = numerals.indexOf(s[i]);
      const indexB = numerals.indexOf(s[i + 1]);
      if (indexA >= 0 && indexB >= 0 && indexA < indexB) {
        retVal += values[indexB] - values[indexA];
        i++;
        continue;
      }
    }

    const indexA = numerals.indexOf(s[i]);
    if (indexA >= 0) {
      retVal += values[indexA];
    }
  }
  return retVal;
};

console.assert(romanToInt("III") === 3, "'III' should equal '3'");
console.assert(romanToInt("LVIII") === 58, "'LVIII' should equal '58'");
console.assert(romanToInt("MCMXCIV") === 1994, "'MCMXCIV' should equal '1994'");
