/**
 * @author KiyonamiYu
 * @date 2019/4/17 11:24
 */
public class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }

    @Override
    public String toString() {
        return new StringBuilder().append(val).toString();
    }
}
