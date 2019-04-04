/**
 * @author KiyonamiYu
 * @date 2019/4/4 19:47
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyHead = new ListNode(-1);
        dummyHead.next = head;
        ListNode prev = dummyHead;
        while(prev.next != null) {
            if(prev.next.val == val) {
                ListNode delNode = prev.next;
                prev.next = prev.next.next;
                delNode.next = null;
                //此时prev不移动，下一个ListNode的值同样为val
            } else {
                prev = prev.next;
            }
        }
        return dummyHead.next;
    }
}