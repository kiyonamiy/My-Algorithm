/**
 * @author KiyonamiYu
 * @date 2019/4/17 9:42
 */
public class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        int left = 0, right = 0;
        while(right < nums.length) {
            if(right > k) {
                left ++;
            }
            for(int j = left; j < right; j ++) {
                if(Math.abs((long)nums[right] - (long)nums[j]) <= t) {
                    return true;
                }
            }
            right ++;
        }
        return false;
    }
}
