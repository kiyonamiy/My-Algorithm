/**
 * @author KiyonamiYu
 * @date 2019/4/8 14:21
 */
public class Solution1 {
    //滑动窗口:防止重复计算子序列
    public int minSubArrayLen(int s, int[] nums) {
        int l = 0, r = -1; //定义nums[l...r]为滑动窗口，包含右边界，定义-1，窗口不包含任何元素
        int sum = 0;
        int minSubLen = nums.length + 1;

//        int count = 0;
        while(l < nums.length) {
//            System.out.println(String.format("Round %d -- [%d, %d]", ++ count, l, r));
//            for(int i = l; i <= r; i ++) {
//                System.out.print(nums[i]);
//                if(i < r) {
//                    System.out.print(", ");
//                } else {
//                    System.out.println();
//                }
//            }

            if(r + 1 < nums.length && sum < s) {
                r ++;
                sum += nums[r];
            } else {    //当右边界不能移动时，一直移动左边界
                sum -= nums[l];
                l ++;
            }
            if(sum >= s) {
                minSubLen = Math.min(minSubLen, r - l + 1);
            }
        }
        if(minSubLen == nums.length + 1) {
            minSubLen = 0;
        }
        return minSubLen;
    }
}
