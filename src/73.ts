import { equals2d } from "./utils/array.utils.ts";

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

const test1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(test1);
console.assert(equals2d(test1, [[1,0,1],[0,0,0],[1,0,1]]));

const test2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(test2);
console.assert(equals2d(test2, [[0,0,0,0],[0,4,5,0],[0,3,1,0]]));