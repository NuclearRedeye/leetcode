import { equals } from "./utils/array.utils.ts";

function removeDuplicates(nums: number[]): number {
  const seen: Set<number> = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      nums.splice(i--, 1);
    } else {
      seen.add(nums[i]);
    }
  }
  return nums.length;
};

const test1 = [1,1,2];
console.assert(removeDuplicates(test1) === 2);
console.assert(equals(test1, [1,2]));
