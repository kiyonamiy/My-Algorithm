/**
 * @author KiyonamiYu
 * @date 2019/4/6 17:48
 */
public class Solution {
    public int removeElement(int[] nums, int val) {
        int noTargetCur = 0;
        for(int i = 0; i < nums.length; i ++) {
            if(nums[i] != val) {
                if(i != noTargetCur) {
                    int temp = nums[i];
                    nums[i] = nums[noTargetCur];
                    nums[noTargetCur] = temp;
                }
                noTargetCur ++;
            }
        }
        return noTargetCur;
    }
}
