/**
 * @author KiyonamiYu
 * @date 2019/4/18 10:07
 * 7min
 */
public class Solution {
    public ListNode oddEvenList(ListNode head) {
        if(head == null) {
            return null;
        }
        ListNode oddHead = new ListNode(0), evenHead = new ListNode(0);
        ListNode oddCur = oddHead, evenCur = evenHead;

        int index = 1;
        ListNode cur = head;
        while(cur != null) {
            ListNode next = cur.next;
            if(index % 2 == 1) {
                oddCur.next = cur;
                oddCur = cur;
            } else {
                evenCur.next = cur;
                evenCur = cur;
            }
            cur.next = null;
            cur = next;
            index ++;
        }
        oddCur.next = evenHead.next;
        return oddHead.next;
    }
}
