/**
 * @author KiyonamiYu
 * @date 2019/4/17 11:24
 * 30min
 */
public class Solution {
    //就多了找头尾的操作
    public ListNode reverseBetween(ListNode head, int m, int n) {

        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;

        ListNode opPre = null, ed = null;
        ListNode prev = null, cur = dummyHead;

        int index = 0;
        while(index <= n) {
            if(index == m - 1) {
                //找到需反转段开始的前一个节点opPrev和结束节点ed
                opPre = cur;
                ed = cur.next;
            }
            if(index < m) {
                cur = cur.next;
            } else {
                ListNode next = cur.next;

                cur.next = prev;

                prev = cur;
                cur = next;
            }
            index ++;
        }
        opPre.next = prev;
        ed.next = cur;
        return dummyHead.next;
    }
}
