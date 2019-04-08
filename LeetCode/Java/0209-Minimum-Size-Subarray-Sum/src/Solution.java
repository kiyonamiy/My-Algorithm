/**
 * @author KiyonamiYu
 * @date 2019/4/8 14:01
 */
public class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        int minSub = nums.length + 1;
        for(int i = 0; i < nums.length; i ++) {
            int sum = 0;
            for(int j = i; j < nums.length && j - i + 1 < minSub; j ++) {
                sum += nums[j]; //不用每次重新求和
                if(sum >= s) {
                    minSub = j - i + 1;
                }
            }
        }
        if(minSub == nums.length + 1) {
            return 0;
        } else {
            return minSub;
        }
    }
}
