/**
 * @author KiyonamiYu
 * @date 2019/4/20 20:13
 * 9min
 */
public class Solution {
    public boolean isPalindrome(ListNode head) {
        if(head == null) {
            return true;
        }
        //例如1->2->3->4，p正好到2
        //例如1->2->3->4->5，p正好到3（前半段长度>=后半段长度）
        ListNode p = head;
        ListNode q = head;
        while(q.next != null && q.next.next != null) {
            p = p.next;
            q = q.next.next;
        }

        ListNode prev = null, cur = p.next;
        while(cur != null) {
            ListNode next = cur.next;
            cur.next = prev;

            prev = cur;
            cur = next;
        }

        ListNode cur2 = prev;
        p.next = null;

        cur = head;
        while(cur2 != null) {
            if(cur.val != cur2.val) {
                return false;
            }
            cur2 = cur2.next;
            cur = cur.next;
        }
        return true;
    }
}
