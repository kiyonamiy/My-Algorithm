/**
 * @author KiyonamiYu
 * @date 2019/4/20 15:58
 * 30min
 */
public class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null) {
            return null;
        }

        int n = 0;
        ListNode cur = head;
        while(cur != null) {
            n ++;
            cur = cur.next;
        }

        k %= n;

        if(k == 0) {
            return head;
        }

        ListNode kCur = head;
        for(int i = 0; i < k + 1; i ++) {
            kCur = kCur.next;
        }
        cur = head;
        while(kCur != null) {
            kCur = kCur.next;
            cur = cur.next;
        }

        ListNode newStartNode = cur.next;
        ListNode newEndNode = newStartNode;
        while(newEndNode.next != null) {
            newEndNode = newEndNode.next;
        }
        newEndNode.next = head;
        cur.next = null;

        return newStartNode;

    }
}
