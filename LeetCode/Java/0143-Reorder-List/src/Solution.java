/**
 * @author KiyonamiYu
 * @date 2019/4/20 19:19
 */
public class Solution {
    public void reorderList(ListNode head) {
        if(head == null) {
            return;
        }
        ListNode p = head;
        ListNode q = head;
        while(q.next != null && q.next.next != null) {
            p = p.next;
            q = q.next.next;
        }

        //反转后半段
        ListNode prev = null, cur2 = p.next;
        while(cur2 != null) {
            ListNode next = cur2.next;
            cur2.next = prev;

            prev = cur2;
            cur2 = next;
        }

        cur2 = prev;
        p.next = null;  //前半段和后半段断开

        //穿插重排
        ListNode cur1 = head;
        while(cur2 != null) {
            ListNode cur1Next = cur1.next;
            ListNode cur2Next = cur2.next;

            cur1.next = cur2;
            cur2.next = cur1Next;

            cur1 = cur1Next;
            cur2 = cur2Next;
        }

    }
}
