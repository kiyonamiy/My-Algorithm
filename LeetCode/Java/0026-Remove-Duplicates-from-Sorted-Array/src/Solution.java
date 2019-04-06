/**
 * @author KiyonamiYu
 * @date 2019/4/6 16:57
 */
//与0283-Move-Zeroes、0027-Remove-Element类似思想
//数组中取部分，考虑此思想
public class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        int noDuplicatesCur = 1;
        int duplicates = nums[0];
        for(int i = 1; i < nums.length; i ++) {
            if(nums[i] != duplicates) {
                duplicates = nums[i];
                nums[noDuplicatesCur] = duplicates;
                noDuplicatesCur ++;
            }
        }
        return noDuplicatesCur;
    }
}
