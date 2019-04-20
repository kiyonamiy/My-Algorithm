/**
 * @author KiyonamiYu
 * @date 2019/4/20 14:42
 * 7min
 */
public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;

        ListNode kCur = dummyHead;
        int index = 0;
        while(index < n + 1) {
            kCur = kCur.next;
            index ++;
        }

        ListNode cur = dummyHead;
        while(kCur != null) {
            cur = cur.next;
            kCur = kCur.next;
        }

        cur.next = cur.next.next;

        return dummyHead.next;
    }
}
