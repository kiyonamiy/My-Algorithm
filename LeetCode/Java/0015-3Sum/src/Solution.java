import java.util.*;

/**
 * @author KiyonamiYu
 * @date 2019/4/15 10:04
 */
public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {

        Arrays.sort(nums);

        List<List<Integer>> sumList = new ArrayList<>();

        //Set<String> set = new HashSet<>();

        for(int i = 0; i < nums.length; i ++) {
            if(i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            for(int j = i + 1; j < nums.length; j ++) {
                if(j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;
                }
                int target = 0 - nums[i] - nums[j];
                int left = j + 1, right = nums.length - 1;
                while(left <= right) {
                    int mid = left + (right - left) / 2;
                    if(target < nums[mid]) {
                        right = mid - 1;
                    } else if(target > nums[mid]) {
                        left = mid + 1;
                    } else {

//                        String resultStr = new StringBuilder().append(nums[i]).append(nums[j]).append(nums[mid]).toString();
//                        if(!set.contains(resultStr)) {
                            sumList.add(new ArrayList<>(Arrays.asList(nums[i], nums[j], nums[mid])));

//                            set.add(resultStr);
//                        }
                        break;
                    }
                }
            }
        }
        return sumList;
    }
}
