function maximumSum(nums: number[]): number {
  let retVal = -1;
  if (nums.length > 1) {
    const sums: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            sums.push(0);
            continue;
        }
        sums.push([...nums[i].toString()].reduce((acc, value) => acc += parseInt(value), 0));
    }

    for (let i = 0; i < nums.length; i++) {
        for (let ii = i + 1; ii < sums.length; ii++) {
            if (sums[i] === sums[ii]) {
                retVal = (retVal >= 0) ? Math.max(retVal, nums[i] + nums[ii]) : nums[i] + nums[ii];
            }
        }
    }
  }
  return retVal;
};

const test1 = [18,43,36,13,7];
console.assert(maximumSum(test1) === 54, "Test 1");

const test2 = [10,12,19,14];
console.assert(maximumSum(test2) === -1, "Test 2");