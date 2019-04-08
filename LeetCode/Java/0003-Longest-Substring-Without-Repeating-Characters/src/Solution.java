import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * @author KiyonamiYu
 * @date 2019/4/8 15:57
 */
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Queue<Character> queue = new LinkedBlockingQueue<>();
        int left = 0, right = -1;
        int maxLen = 0;
        while(left < s.length()) {
            if(right + 1 < s.length() && !queue.contains(s.charAt(right + 1))) {
                right ++;
                queue.add(s.charAt(right));
            } else {
                queue.remove();
                left ++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}
