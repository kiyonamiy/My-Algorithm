/**
 * @author KiyonamiYu
 * @date 2019/4/19 20:23
 * 29min
 */
public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if(head == null) {
            return null;
        }
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;

        ListNode cur = head;
        int count = 0;
        while(cur != null) {
            cur = cur.next;
            count ++;
        }
        //分段处理，余下的直接链接，不需要反转
        int time = count / k;

        ListNode p = dummyHead;
        while(time -- > 0) {
            ListNode start = p.next;

            //反转定长度的子链表
            cur = p.next;
            ListNode prev = p, next = null;
            count = 0;
            while(count ++ < k) {
                next = cur.next;

                cur.next = prev;

                prev = cur;
                cur = next;
            }
            start.next = next;  //（与p = start配合）为下段的p.next做好准备，与下一段相连。
            p.next = prev;      //连接反转后的头

            p = start;
        }

        return dummyHead.next;
    }
}
