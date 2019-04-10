import java.util.HashSet;
import java.util.Set;

/**
 * @author KiyonamiYu
 * @date 2019/4/10 20:35
 */
public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {

        Set<Integer> set1 = new HashSet<>();
        for(int i = 0; i < nums1.length; i ++) {
            set1.add(nums1[i]);
        }

        Set<Integer> set2 = new HashSet<>();
        for(int i = 0; i < nums2.length; i ++) {
            if(set1.contains(nums2[i])) {
                set2.add(nums2[i]);
            }
        }
        int[] ret = new int[set2.size()];
        int index = 0;
        for (int e : set2) {
            ret[index ++] = e;
        }
        return ret;
    }
}
