import java.util.Arrays;

/**
 * @author KiyonamiYu
 * @date 2019/4/15 15:48
 */
public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);

        int diff = Integer.MAX_VALUE;
        int sumClosest = 0;
        for(int i = 0; i < nums.length; i ++) {
            int left = i + 1, right = nums.length - 1;
            while(left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if(Math.abs(sum - target) < diff) {
                    sumClosest = sum;
                    diff = Math.abs(sum - target);
                }
                if(sum < target) {
                    left ++;
                } else if(sum > target) {
                    right --;
                } else {
                    return target;
                }
            }
        }
        return sumClosest;
    }
}
