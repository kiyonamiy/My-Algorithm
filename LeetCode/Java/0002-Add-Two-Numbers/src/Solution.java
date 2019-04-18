/**
 * @author KiyonamiYu
 * @date 2019/4/18 12:46
 * 30min
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode cur1 = l1, cur2 = l2;
        ListNode last1 = null, last2 = null;
        int carry = 0;
        while(cur1 != null && cur2 != null) {
            int sum = cur1.val + cur2.val + carry;
            if(sum >= 10) {
                sum -= 10;
                carry = 1;
            } else {
                carry = 0;
            }
            cur1.val = sum;

            if(cur1.next == null) {
                last1 = cur1;
                last2 = cur2;
            }
            cur1 = cur1.next;
            cur2 = cur2.next;
        }
        if(cur1 == null) {
            last1.next = last2.next;
            cur1 = last1.next;
        }
        while(cur1 != null) {
            int sum = cur1.val + carry;
            if(sum >= 10) {
                sum -= 10;
                carry = 1;
            } else {
                carry = 0;
            }
            cur1.val = sum;
            if(cur1.next == null && carry == 1) {
                last1 = cur1;
            }
            cur1 = cur1.next;
        }
        if(carry == 1) {
            ListNode newNode = new ListNode(1);
            last1.next = newNode;
        }
        return l1;
    }
}
