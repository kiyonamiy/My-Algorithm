/**
 * @author KiyonamiYu
 * @date 2019/4/18 9:30
 * 15min
 */
public class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode lessHead = new ListNode(0), greaterHead = new ListNode(0);
        ListNode lessCur = lessHead, greaterCur = greaterHead;

        ListNode cur = head;
        while(cur != null) {
            ListNode next = cur.next;
            if(cur.val < x) {
                lessCur.next = cur;
                lessCur = cur;
            } else {
                greaterCur.next = cur;
                greaterCur = cur;
            }
            cur.next = null;
            cur = next;
        }
        lessCur.next = greaterHead.next;
        return lessHead.next;
    }
}
