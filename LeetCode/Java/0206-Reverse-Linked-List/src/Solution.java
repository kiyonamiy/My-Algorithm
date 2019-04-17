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
        ListNode prev = null, cur = head, next = head.next;
        while(cur != null) {
            cur.next = prev;

            prev = cur;
            cur = next;
            if(next != null) {
                next = next.next;
            }
        }
        return prev;
    }
}
