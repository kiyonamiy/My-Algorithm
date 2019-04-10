import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/10 21:07
 */
public class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        List<Integer> result = new LinkedList<>();

        Map<Integer, Integer> map1 = new HashMap<>();
        for(int num : nums1) {
            map1.put(num, map1.getOrDefault(num, 0) + 1);
        }

        for(int num : nums2) {
            if(map1.containsKey(num) && map1.get(num) > 0) {
                result.add(num);
                map1.put(num, map1.get(num) - 1);
            }
        }

        int[] ret = new int[result.size()];
        int index = 0;
        for(int num : result) {
            ret[index ++] = num;
        }
        return ret;
    }
}
