function minOperations(nums: number[], k: number): number {
  let retVal = 1;

  if (nums.length < 2 || nums.length > 10 ** 9 ||k < 1 || k > 100000) {
      return 0; 
  }

  const buffer = [...nums.sort((a, b) => a - b)];
  if (buffer[0] >= k) {
      return 0;
  }

  do 
  {
      const x = buffer.shift();
      const y = buffer.shift();
      buffer.push(Math.min(x, y) * 2 + Math.max(x, y));
      buffer.sort((a, b) => a - b);
      if (buffer[0] >= k) {
          break;
      }

      retVal += 1;
  } while (buffer.length > 1);

  return retVal;
};

const test1 = [2,11,10,1,3];
console.assert(minOperations(test1, 10) === 2);

const test2 = [1,1,2,4,9];
console.assert(minOperations(test2, 20) === 4);