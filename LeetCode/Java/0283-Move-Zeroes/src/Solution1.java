/**
 * @author KiyonamiYu
 * @date 2019/4/6 16:19
 */
public class Solution1 {
    //[0, noZeroCur)中保存所有当前遍历过的非零元素
    public void moveZeroes(int[] nums) {
        int noZeroCur = 0;
        int cur = 0;
        while(cur < nums.length) {
            if(nums[cur] != 0) {
                nums[noZeroCur] = nums[cur];
                noZeroCur ++;
            }
            cur ++;
        }
        //将nums剩余位置放置为0
        while(noZeroCur < nums.length) {
            nums[noZeroCur] = 0;
            noZeroCur ++;
        }
    }
}
