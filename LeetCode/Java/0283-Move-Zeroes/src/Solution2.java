/**
 * @author KiyonamiYu
 * @date 2019/4/6 16:28
 */
public class Solution2 {
    //Solution是遇到0的时候开始交换，Solution2是遇到非0开始交换
    public void moveZeroes(int[] nums) {
        int noZeroCur = 0;
        for(int i = 0; i < nums.length; i ++) {
            if(nums[i] != 0) {
                if(i != noZeroCur) {
                    int temp = nums[noZeroCur];
                    nums[noZeroCur] = nums[i];
                    nums[i] = temp;
                }
                noZeroCur ++;
            }
        }
    }
}
