/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  let a = headA;
  let b = headB;
  while (a != b) {
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }
  return a;
};

// 一定只循环两次~！
// 相当于把AB连在了一起，跑的路程是相同的，最后一定会遇到，或者一起为null。
// https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/49785/Java-solution-without-knowing-the-difference-in-len!
// 评论里有例子！
