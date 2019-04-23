import java.util.*;

/**
 * @author KiyonamiYu
 * @date 2019/4/23 14:49
 */
public class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {

        HashMap<Integer, Integer> record = new HashMap<>();
        for (int num : nums) {
            record.put(num, record.getOrDefault(num, 0) + 1);
        }

        List<Integer> topK = new ArrayList<>();
        int heapSize = record.size() - k;
        //最大堆，总是先弹出频率最大的元素
        PriorityQueue<Integer> heap = new PriorityQueue<>((n1, n2) -> record.get(n2) - record.get(n1));
        for(int num : record.keySet()) {
            heap.add(num);
            //保存在堆中的是n - k个频率小的
            if(heap.size() > heapSize) {
                topK.add(heap.poll());
            }
        }
        return topK;
    }
}
