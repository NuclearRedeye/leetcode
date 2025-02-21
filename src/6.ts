function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  let retVal = "";
  let position = 0;
  let direction = 1;
  let counter = 0;
  const grid = new Array(numRows);

  for (let i = 0; i < numRows; i++) {
    grid[i] = [];
  }

  while (counter < s.length) {
    grid[position].push(s[counter++]);

    position += direction;
    if (position < 0 || position >= numRows) {
        direction = -direction;
        position += (2 * direction);
    }
  }

  for (const row of grid) {
      retVal += row.join('');
  }

  return retVal;
};

console.assert(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR", "'PAYPALISHIRING' converted should equal 'PAHNAPLSIIGYIR'");
console.assert(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI", "'PAYPALISHIRING' converted should equal 'PINALSIGYAHRPI'");
console.assert(convert("A", 1) === "A", "'A' converted should equal 'A'");
console.assert(convert("A", 2) === "A", "'A' converted should equal 'A'");
console.assert(convert("AB", 1) === "AB", "'AB' converted should equal 'AB'");