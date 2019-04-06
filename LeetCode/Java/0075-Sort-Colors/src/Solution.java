/**
 * @author KiyonamiYu
 * @date 2019/4/6 19:46
 */
public class Solution {
    //计数排序
    public void sortColors(int[] nums) {
        int[] counts = {0, 0, 0};
        for(int i = 0; i < nums.length; i ++) {
            counts[nums[i]] ++;
        }
        int cur = 0;
        for(int i = 0; i < 3; i ++) {
            for(int j = 0; j < counts[i]; j ++) {
                nums[cur ++] = i;
            }
        }
    }
}
