import { equals } from "./utils/array.utils.ts";

function removeElement(nums: number[], val: number): number {
  const retVal = nums.length;
  if ( nums.length >= 0 && nums.length <= 100 && val >= 0 && val <= 100) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0 && nums[i] > 50) {
        return retVal;
      }
      if (nums[i] === val) {
        nums.splice(i--, 1);
      }
    }
  }
  return nums.length;
};

const test1 = [3,2,2,3];
console.assert(removeElement(test1, 3) === 2);
console.assert(equals(test1, [2,2]));

const test2 = [0,1,2,2,3,0,4,2];
console.assert(removeElement(test2, 2) === 5);
console.assert(equals(test2, [0,1,3,0,4]));