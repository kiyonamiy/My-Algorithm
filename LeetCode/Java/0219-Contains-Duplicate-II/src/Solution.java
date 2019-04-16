import java.util.*;

/**
 * @author KiyonamiYu
 * @date 2019/4/16 16:52
 */
public class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, List<Integer>> map = new HashMap<>();
        for(int i = 0; i < nums.length; i ++) {
            if(!map.containsKey(nums[i])) {
               map.put(nums[i], new ArrayList<>());
            }
            map.get(nums[i]).add(i);
        }
        for(List<Integer> list : map.values()) {
            for(int j = 0; j < list.size() - 1; j ++) {
                if(list.get(j + 1) - list.get(j) <= k) {
                    return true;
                }
            }
        }
        return false;
    }
}
