/**
 * @author KiyonamiYu
 * @date 2019/4/4 21:18
 */
public class Solution2 {
    public ListNode removeElements(ListNode head, int val) {
        if(head == null) {
            return null;
        }
        head.next = removeElements(head.next, val);
        return head.val == val ? head.next : head;
    }

    //测试
    public static void main(String[] args) {

        int[] nums = {1, 2, 6, 3, 4, 5, 6};
        ListNode head = new ListNode(nums);
        System.out.println(head);

        ListNode res = (new Solution2()).removeElements(head, 6);
        System.out.println(res);
    }
}
