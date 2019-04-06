import java.util.Arrays;

/**
 * @author KiyonamiYu
 * @date 2019/4/6 22:24
 */
public class Solution {
    public int findKthLargest(int[] nums, int k) {
        Arrays.sort(nums);
        return nums[nums.length - k];
    }
}
