/**
 * @author KiyonamiYu
 * @date 2019/4/20 14:27
 */
public class Solution {
    public void deleteNode(ListNode node) {
        ListNode cur = node;
        ListNode prev = null;
        while(cur.next != null) {
            cur.val = cur.next.val;
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
    }
}
