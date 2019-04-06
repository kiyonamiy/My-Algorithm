/**
 * @author KiyonamiYu
 * @date 2019/4/6 20:36
 */
public class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for(int i = 0; i < n; i ++) {
            insert(nums1, m ++, nums2[i]);
        }
    }

    private void insert(int nums[], int len, int val) {
        for(int i = len; i > 0; i --) {
            if(nums[i - 1] > val) {
                nums[i] = nums[i - 1];
            } else {
                nums[i] = val;
                return;
            }
        }
        //当val最小，特殊处理
        nums[0] = val;
    }
}
