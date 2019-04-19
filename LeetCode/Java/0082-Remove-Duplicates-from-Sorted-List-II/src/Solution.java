import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/19 9:21
 */
public class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        Map<Integer, Integer> record = new LinkedHashMap<>();
        ListNode cur = head;

        while(cur != null) {
            record.put(cur.val, record.getOrDefault(cur.val, 0) + 1);
            cur = cur.next;
        }

        ListNode dummyHead = new ListNode(0);
        cur = dummyHead;

        for(Map.Entry<Integer, Integer> entry : record.entrySet()) {
            if(entry.getValue() == 1) {
                cur.next = new ListNode(entry.getKey());
                cur = cur.next;
            }
        }

        return dummyHead.next;
    }
}
