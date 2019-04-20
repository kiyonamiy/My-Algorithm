/**
 * @author KiyonamiYu
 * @date 2019/4/20 14:37
 */
public class Solution1 {
    public void deleteNode(ListNode node) {
        if(node == null) {
            return;
        }
        if(node.next == null) {
            node = null;
        }
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
