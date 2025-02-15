/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
};

function arrayToNodeList(nums: number[]) : ListNode {
  const retVal: ListNode = { val: nums[0], next: null };

  let current = retVal;
  for (let i = 1; i < nums.length; i++) {
    current.next = { val: nums[i], next: null } as ListNode;
    current = current.next;
  }

  return retVal;
}

function listNodetoString(start: ListNode): string {
  let retVal = "";
  let current = start;
  do {
    retVal += current.val.toString();
    current = current.next as ListNode;
  } while (current !== null);
  return retVal;
}

function listNodeToNumber(start: ListNode) : bigint {
  const asStr = listNodetoString(start);
  const asNum = [...asStr].reverse().join('')
  return BigInt(asNum);
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null { 
  let retVal: ListNode | null = null;
  if (l1 !== null && l2 !== null) {
    let a = listNodeToNumber(l1);
    let b = listNodeToNumber(l2);
    retVal = arrayToNodeList([...(a + b).toString()].reverse().map(v => parseInt(v)));
  }
  return retVal;
};

const test1 = addTwoNumbers(arrayToNodeList([2,4,3]), arrayToNodeList([5,6,4])) as ListNode;
console.assert(listNodetoString(test1) === '708');

const test2 = addTwoNumbers(arrayToNodeList([0]), arrayToNodeList([0])) as ListNode;
console.assert(listNodetoString(test2) === '0');

const test3 = addTwoNumbers(arrayToNodeList([9,9,9,9,9,9,9]), arrayToNodeList([9,9,9,9])) as ListNode;
console.assert(listNodetoString(test3) === '89990001');

const test4 = addTwoNumbers(arrayToNodeList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), arrayToNodeList([5,6,4])) as ListNode;
console.assert(listNodetoString(test4) === '6640000000000000000000000000001');