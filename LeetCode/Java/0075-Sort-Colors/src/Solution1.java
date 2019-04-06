/**
 * @author KiyonamiYu
 * @date 2019/4/6 20:01
 */
public class Solution1 {
    //三路快排
    public void sortColors(int[] nums) {
        int zero = -1;
        int two = nums.length;
        int index = 0;
        while(index < two) {
            if(nums[index] == 1) {
                index ++;
            } else if(nums[index] == 2) {
                swap(nums, index, --two);
            } else if(nums[index] == 0) {
                swap(nums, ++zero, index++);
            }
        }
    }

    private void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
}
