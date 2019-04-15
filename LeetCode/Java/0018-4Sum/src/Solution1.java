import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/4/15 11:46
 */
public class Solution1 {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        ArrayList<List<Integer>> sumList = new ArrayList<>();
        if(nums.length < 4) {
            return sumList;
        }
        Arrays.sort(nums);
        for(int i = 0; i < nums.length - 3; i ++) {
            if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
                break;
            }
            if(nums[i] + nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] < target) {
                continue;
            }
            if(i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            for(int j = i + 1; j < nums.length - 2; j ++) {
                if(nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                    break;
                }
                if(nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] < target) {
                    continue;
                }
                if(j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                //对撞指针，相比第一种解法（二分搜索只搜索一个值），一次找两个值。
                int left = j + 1, right = nums.length - 1;
                while(left < right) {
                    int sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if(sum < target) {
                        left ++;
                    } else if(sum > target) {
                        right --;
                    } else {
                        sumList.add(new ArrayList<>(Arrays.asList(nums[i], nums[j], nums[left], nums[right])));
                        while(left < right && nums[left] == nums[left + 1]) {   //skipping over duplicate on left
                            left ++;
                        }
                        while(left < right && nums[right] == nums[right - 1]) { //skipping over duplicate on right
                            right --;
                        }
                        left ++;
                        right --;
                    }
                }
            }
        }
        return sumList;
    }
}
