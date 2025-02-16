function findMedianSortedArrays(nums1: number[], nums2: number[]): number {    
  let retVal = 0;
  let a = 0;
  let b = 0;
  let sorted: number[] = [];

  let until = Math.ceil((nums1.length + nums2.length) / 2);
  if (!((nums1.length + nums2.length) & 0x1)) {
    until += 1;
  }

  for (let i = 0; i < until; i++) {
    if (a >= nums1.length) {
      sorted.push(nums2[b++]);
    } else if (b >= nums2.length) {
      sorted.push(nums1[a++]);
    } else if (nums1[a] <= nums2[b]) {
      sorted.push(nums1[a++]);
    } else {
      sorted.push(nums2[b++]);
    }
  }

  if ((nums1.length + nums2.length) & 0x1) {
    retVal = sorted.pop() as number;
  } else {
    const a = sorted.pop() as number;
    const b = sorted.pop() as number;
    retVal = (a + b) / 2;
  }

  return retVal;
};

console.assert(findMedianSortedArrays([1,3], [2]) === 2, "[1,3] & [2] == 2");
console.assert(findMedianSortedArrays([1,2], [3,4]) === 2.5, "[1,2] & [3,4] == 2.5");