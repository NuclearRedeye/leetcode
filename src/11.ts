function maxArea(height: number[]): number {
  let retVal = 0;
  let start = 0;
  let end = height.length - 1;
  while (start <= end) {
    const tallest = Math.min(height[start], height[end]);
    const area = tallest * (end - start);
    retVal = Math.max(retVal, area);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  
  return retVal;
};

console.assert(maxArea([1,8,6,2,5,4,8,3,7]) === 49, "[1,8,6,2,5,4,8,3,7] should result in '49'");
console.assert(maxArea([1,1]) === 1, "[1,1] should result in '1'");