/**
 * @author KiyonamiYu
 * @date 2019/4/8 16:23
 */
public class Solution1 {
    public int lengthOfLongestSubstring(String s) {
        //扩展ASCII码
        // 最小是'\0'，最大是'\xff'，
        // 即最小是ASCII码为0的字符，即最大是ASCII码为255的字符
        int[] freq = new int[256];
        int left = 0, right = -1;
        int maxLen = 0;
        while(left < s.length()) {
            if(right + 1 < s.length() && freq[s.charAt(right + 1)] == 0) {
                freq[s.charAt(++ right)] ++;
            } else {
                freq[s.charAt(left ++)] --;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}
