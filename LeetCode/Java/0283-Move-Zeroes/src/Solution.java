/**
 * @author KiyonamiYu
 * @date 2019/4/6 15:42
 */
public class Solution {
    //寻找0，找到后，和后面第一个非0交换。
    public void moveZeroes(int[] nums) {
        int cur = -1;
        for(int i = 0; i < nums.length; i ++) {
            if(nums[i] == 0) {
                if(cur < 0) {
                    cur = i + 1;
                }
                while(cur < nums.length) {
                    if(nums[cur] != 0) {
                        nums[i] = nums[cur];
                        nums[cur] = 0;
                        break;
                    }
                    cur ++;
                }
            }
        }
    }
}
