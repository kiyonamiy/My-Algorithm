/**
 * @author KiyonamiYu
 * @date 2019/4/7 9:54
 */
public class Solution {
    //二分查找
    public int[] twoSum(int[] numbers, int target) {
        for(int i = 0; i < numbers.length; i ++) {
            int anotherVal = target - numbers[i];
            int left = i + 1, right = numbers.length - 1;

            while(left <= right) {
                int mid = left + (right - left) / 2;

                if(numbers[mid] == anotherVal) {
                    return new int[]{i + 1, mid + 1};
                }

                if(numbers[mid] < anotherVal) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        throw new IllegalArgumentException("No Answer");
    }
}
