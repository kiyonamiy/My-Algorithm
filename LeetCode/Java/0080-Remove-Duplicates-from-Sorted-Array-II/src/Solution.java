/**
 * @author KiyonamiYu
 * @date 2019/4/6 17:58
 */
public class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        int no2DuplicatesCur = 1;
        int duplicates = nums[0];
        int dupCount = 1;
        for(int i = 1; i < nums.length; i ++) {
            if(nums[i] != duplicates) {
                duplicates = nums[i];
                nums[no2DuplicatesCur] = duplicates;
                no2DuplicatesCur ++;
                dupCount = 1;
            } else if((nums[i] == duplicates && dupCount < 2)) {
                duplicates = nums[i];
                nums[no2DuplicatesCur] = duplicates;
                no2DuplicatesCur ++;
                dupCount ++;
            }
        }
        return no2DuplicatesCur;
    }
}
