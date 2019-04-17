/**
 * @author KiyonamiYu
 * @date 2019/4/17 10:58
 * 10min
 */
public class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null) {
            return null;
        }
        ListNode prev = null, cur = head;
        while(cur != null) {
            ListNode next = cur.next;

            cur.next = prev;

            prev = cur;
            cur = next;
        }
        return prev;
    }
}
