public class Main {

    public static void main(String[] args) {
        ListNode node1= new ListNode(1);
        ListNode node2= new ListNode(1);
        ListNode node3= new ListNode(2);
        ListNode node4= new ListNode(2);
        ListNode node5= new ListNode(3);

        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node5;
        node5.next = null;

        new Solution().deleteDuplicates(node1);
    }
}
