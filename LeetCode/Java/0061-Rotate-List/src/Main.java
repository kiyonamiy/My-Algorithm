public class Main {

    public static void main(String[] args) {
        int[] nums = {1};
        int k = 0;
        ListNode head = createListNode(nums);
        new Solution().rotateRight(head, k);
    }

    private static ListNode createListNode(int[] nums) {
        ListNode dummyHead = new ListNode(0);
        ListNode cur = dummyHead;
        for(int i = 0; i < nums.length; i ++) {
            ListNode newNode = new ListNode(nums[i]);
            cur.next = newNode;
            cur = cur.next;
        }
        return dummyHead.next;
    }
}
