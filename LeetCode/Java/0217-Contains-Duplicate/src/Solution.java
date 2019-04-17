import java.util.HashSet;
import java.util.Set;

/**
 * @author KiyonamiYu
 * @date 2019/4/17 9:33
 */
public class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> record = new HashSet<>();
        for(int i = 0; i < nums.length; i ++) {
            if(!record.add(nums[i])) {
                return true;
            }
        }
        return false;
    }
}
