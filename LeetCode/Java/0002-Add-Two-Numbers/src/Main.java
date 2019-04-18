public class Main {

    public static void main(String[] args) {
        int[] nums1 = {9};
        int[] nums2 = {1,9,9,9,9,9,9,9,9,9};
        ListNode l1 = createListNode(nums1);
        ListNode l2 = createListNode(nums2);

        new Solution().addTwoNumbers(l1, l2);
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
