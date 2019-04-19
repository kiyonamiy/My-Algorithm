/**
 * @author KiyonamiYu
 * @date 2019/4/19 15:35
 * 14min
 */
public class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode prev = null, cur = head, next = null;

        ListNode dummyHead = new ListNode(0);
        ListNode dummyCur = dummyHead;
        int count = 1;
        while(cur != null) {
            if(count == 1) {
                prev = cur;
                cur = cur.next;
            } else if(count == 2) {
                next = cur.next;

                cur.next = prev;
                prev.next = null;

                dummyCur.next = cur;
                dummyCur = prev;

                count = 0;
                cur = next;
            }
            count ++;
        }
        if(count == 2) {
            dummyCur.next = prev;
        }
        return dummyHead.next;
    }
}
