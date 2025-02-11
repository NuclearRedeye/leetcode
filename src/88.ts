import { equals } from './utils/array.utils.ts';

 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m >= 0 && 
      m <= 200 &&
      n >= 0 && 
      n <= 200 && 
      m + n >= 1 && 
      m + n <= 200 && 
      nums1.length === m + n && 
      nums2.length === n) {
    for (let i = 0, ii = 0; i < nums1.length && ii < n; i++) {
      if (i >= nums1.length - n || nums2[ii] < nums1[i]) {
          nums1.splice(i, 0, nums2[ii++]);
      }
    }
    nums1.splice(-n, n);
  }
};


const test1 = [1,2,3,0,0,0];
merge(test1, 3, [2,5,6], 3);
console.assert(equals(test1, [1,2,2,3,5,6]), "Test case 1 !== [1,2,2,3,5,6]");

const test2 = [-1,0,0,3,3,3,0,0,0];
merge(test2, 6, [1,2,2], 3);
console.assert(equals(test2, [-1,0,0,1,2,2,3,3,3]), "Test case 2 !== [-1,0,0,1,2,2,3,3,3]");