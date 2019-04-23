import java.util.PriorityQueue;

/**
 * @author KiyonamiYu
 * @date 2019/4/23 15:30
 * 7min
 */
public class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists.length == 0) {
            return null;
        }
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        for(ListNode head : lists) {
            ListNode cur = head;
            while(cur != null) {
                priorityQueue.add(cur.val);
                cur = cur.next;
            }
        }
        ListNode dummyHead = new ListNode(0);
        ListNode cur = dummyHead;
        while(!priorityQueue.isEmpty()) {
            cur.next = new ListNode(priorityQueue.poll());
            cur = cur.next;
        }
        return dummyHead.next;
    }
}
