import java.util.HashSet;
import java.util.Set;

/**
 * @author KiyonamiYu
 * @date 2019/4/16 17:12
 */
public class Solution1 {
    //滑动窗口+查找表
    //一段以k长度的区间持续前进，每到k+1的位置，就要从set中删去之前存入的1
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Set<Integer> record = new HashSet<>();
        for(int i = 0; i < nums.length; i ++) {
            if(i > k) {
                record.remove(nums[i - k - 1]);
            }
            //出现重复元素，添加失败
            if(!record.add(nums[i])) {
                return true;
            }
        }
        return false;
    }
}
