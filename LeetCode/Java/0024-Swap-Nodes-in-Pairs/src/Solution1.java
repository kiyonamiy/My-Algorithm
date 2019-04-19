/**
 * @author KiyonamiYu
 * @date 2019/4/19 19:43
 */
public class Solution1 {
    public ListNode swapPairs(ListNode head) {
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;

        ListNode p = dummyHead;
        while(p.next != null && p.next.next != null) {
            ListNode node1 = p.next;
            ListNode node2 = node1.next;
            ListNode next = node2.next;

            node2.next = node1;
            //node1.next = null;  //与底下的p=node1配合，会导致while循环p.next != null退出。
            node1.next = next;    //这条语句只是为下一次循环找到node1做好准备，并没有实际操作。（同时也为最后出现单独节点做了链接处理）
            p.next = node2;

            p = node1;
        }
        return dummyHead.next;
    }
}
