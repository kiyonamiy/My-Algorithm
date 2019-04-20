public class Main {

    public static void main(String[] args) {
        int[] nums = {-1, 5, 3, 4, 0};
        ListNode listNode = createListNode(nums);
        new Solution().insertionSortList(listNode);
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
