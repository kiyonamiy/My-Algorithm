/**
 * @author KiyonamiYu
 * @date 2019/4/7 10:10
 */
public class Solution1 {
    //对撞指针，二者不断向中间移动
    //因为有序
    //当sum比target小的时候，left右移一位（变大），（如果考虑right右移一位，虽然也变大，但是回到了前一次的判断中（之前否定过的结果）
    public int[] twoSum(int[] numbers, int target) {
        int left = 0, right = numbers.length - 1;

        while(left < right) {
            int sum = numbers[left] + numbers[right];
            if(sum == target) {
                return new int[] { left + 1, right + 1};
            }
            if(sum < target) {
                left ++;
            } else {
                right --;
            }
        }
        throw new IllegalArgumentException("No Answer");
    }
}
