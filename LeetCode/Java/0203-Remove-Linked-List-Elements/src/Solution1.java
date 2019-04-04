/**
 * @author KiyonamiYu
 * @date 2019/4/4 19:57
 */
public class Solution1 {
    public ListNode removeElements(ListNode head, int val) {
        //头部ListNode.val = val情况
        //因为头部Node没有前置节点，所以处理不同
        while(head != null && head.val == val) {
            ListNode delNode = head;
            head = head.next;
            delNode.next = null;
        }

        if(head == null) {
            return null;
        }
        //中间ListNode.val = val情况
        ListNode prev = head;
        //while(prev != null && prev.next != null) {
        while(prev.next != null) {
            if(prev.next.val == val) {
                ListNode delNode = prev.next;
                prev.next = prev.next.next;
                delNode.next = null;
            } else {
                prev = prev.next;
            }
        }
        return head;
    }
}
