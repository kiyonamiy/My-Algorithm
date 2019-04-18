import java.util.Stack;

/**
 * @author KiyonamiYu
 * @date 2019/4/18 14:12
 * 17min
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<Integer> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();
        Stack<Integer> stack3 = new Stack<>();
        ListNode cur = l1;
        while(cur != null) {
            stack1.push(cur.val);
            cur = cur.next;
        }
        cur = l2;
        while(cur != null) {
            stack2.push(cur.val);
            cur = cur.next;
        }

        int carry = 0;
        while(!stack1.isEmpty() || !stack2.isEmpty()) {
            int x = !stack1.isEmpty() ? stack1.pop() : 0;
            int y = !stack2.isEmpty() ? stack2.pop() : 0;
            int sum = carry + x + y;
            carry = sum / 10;
            stack3.push(sum % 10);
        }
        if(carry > 0) {
            stack3.push(carry);
        }
        ListNode dummyHead = new ListNode(0);
        cur = dummyHead;
        while(!stack3.isEmpty()) {
            cur.next = new ListNode(stack3.pop());
            cur = cur.next;
        }
        return dummyHead.next;
    }
}
