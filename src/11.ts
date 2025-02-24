function maxArea(height: number[]): number {
  let retVal = 0;
  for (let i = 0; i < height.length; i++) {
    for (let ii = i + 1; ii < height.length; ii++) {
      const tallest = Math.min(height[i], height[ii]);
      const area = tallest * (ii - i);
      retVal = Math.max(retVal, area);
    }
  }
  return retVal;
};

console.assert(maxArea([1,8,6,2,5,4,8,3,7]) === 49, "[1,8,6,2,5,4,8,3,7] should result in '49'");
console.assert(maxArea([1,1]) === 1, "[1,1] should result in '1'");