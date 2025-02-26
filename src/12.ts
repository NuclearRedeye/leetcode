const numerals = [['I', 'V'], ['X', 'L'], ['C', 'D'], ['M', 'M']];

function intToRoman(num: number): string {
  let retVal = "";
  const reversed = [...num.toString()].reverse();

  for (let i = 0; i < reversed.length && i < numerals.length; i++) {
    const digit = parseInt(reversed[i]);
    if (Number.isNaN(digit)) {
      return "";
    }

    switch(digit) {
      case 1: retVal += numerals[i][0]; break;
      case 2: retVal += numerals[i][0] + numerals[i][0]; break;
      case 3: retVal += numerals[i][0] + numerals[i][0] + numerals[i][0]; break;
      case 4: retVal += numerals[i][1] + numerals[i][0]; break;
      case 5: retVal += numerals[i][1]; break;
      case 6: retVal += numerals[i][0] + numerals[i][1]; break;
      case 7: retVal += numerals[i][0] + numerals[i][0] + numerals[i][1]; break;
      case 8: retVal += numerals[i][0] + numerals[i][0] + numerals[i][0] + numerals[i][1]; break;
      case 9: retVal += numerals[i + 1][0] + numerals[i][0]; break;
      default: break;
    }
  }
  return [...retVal].reverse().join('');
};

console.assert(intToRoman(90) === "XC", "'90' should result in 'XC'");
console.assert(intToRoman(58) === "LVIII", "'58' should result in 'LVIII'");
console.assert(intToRoman(1994) === "MCMXCIV", "'1994' should result in 'MCMXCIV'");