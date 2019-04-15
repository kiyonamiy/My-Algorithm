import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/4/15 11:21
 */
public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> sumList = new ArrayList<>();

        if(nums.length < 4) {
            return sumList;
        }

        Arrays.sort(nums);

        for(int i = 0; i < nums.length - 3; i ++) {
            if(i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            for(int j = i + 1; j < nums.length; j ++) {
                if(j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                for(int k = j + 1; k < nums.length; k ++) {
                    if(k > j + 1 && nums[k] == nums[k - 1]) {
                        continue;
                    }
                    int another = target - nums[i] - nums[j] - nums[k];
                    int left = k + 1, right = nums.length - 1;
                    while(left <= right) {
                        int mid = left + (right - left) / 2;
                        if(another < nums[mid]) {
                            right = mid - 1;
                        } else if(another > nums[mid]) {
                            left = mid + 1;
                        } else {
                            sumList.add(new ArrayList<>(Arrays.asList(nums[i], nums[j], nums[k], nums[mid])));
                            break;
                        }
                    }
                }
            }
        }
        return sumList;
    }
}
