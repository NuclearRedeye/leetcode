
function setZeroes(matrix: number[][]): void {
  const rows = new Set<number>();
  const columns = new Set<number>();
  for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
          if (matrix[x][y] === 0) {
              rows.add(x);
              columns.add(y);
          }
      }
  }

  for (const row of rows) {
    matrix[row].fill(0);
  }

  for (const column of columns) {
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][column] = 0;
      }
  }
};
