function maxDifference(s: string): number {
    const frequency: Map<string, number> = new Map();
    for (const char of [...s]) {
      const count = (frequency.get(char) || 0) + 1;
      frequency.set(char, count);
    }

    let maxOdd = 0;
    let evens: number[] = [];
    for (const [key, value] of frequency.entries()) {
      if (value & 0x1) {
        maxOdd = (value > maxOdd) ? value : maxOdd;
      } else {
        evens.push(value);
      }
    }

    let retVal = maxOdd - evens[0];
    for (let i = 1; i < evens.length; i++) {
      const assess = maxOdd - evens[i];
      retVal = (assess > retVal) ? assess : retVal;
    }
    return retVal;
};

console.assert(maxDifference("aaaaabbc") === 3);
console.assert(maxDifference("abcabcab") === 1);
console.assert(maxDifference("mmsmsym") === -1);