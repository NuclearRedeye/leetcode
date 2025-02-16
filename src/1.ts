import { equals } from './utils/array.utils.ts';

function twoSum(nums: number[], target: number): number[] {
  if (nums.length >= 2 ) {
      for (let i = 0; i < nums.length; i++) {
          for (let ii = i + 1; ii < nums.length; ii++ ) {
              if (nums[i] + nums[ii] === target) {
                  return [i, ii];
              }
          }
      }
  }
  return [];
};

console.assert(equals(twoSum([2,7,11,15], 9), [0,1]));
console.assert(equals(twoSum([3,2,4], 6), [1,2]));
console.assert(equals(twoSum([3,3], 6), [0,1]));