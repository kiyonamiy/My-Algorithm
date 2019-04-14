import java.util.HashSet;
import java.util.Set;

/**
 * @author KiyonamiYu
 * @date 2019/4/14 20:20
 */
public class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        while(n != 1) {
            int sum = 0;
            while(n != 0) {
                sum += Math.pow(n % 10, 2);
                n /= 10;
            }
            n = sum;
            if(set.contains(n)) {
                return false;
            } else {
                set.add(n);
            }
        }
        return true;
    }
}
