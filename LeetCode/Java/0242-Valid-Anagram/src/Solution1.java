/**
 * @author KiyonamiYu
 * @date 2019/4/14 17:44
 */
public class Solution1 {
    public boolean isAnagram(String s, String t) {
        int[] charCount = new int[256];
        for(char ch : s.toCharArray()) {
            charCount[ch] ++;
        }
        for(char ch : t.toCharArray()) {
            if(charCount[ch] == 0) {
                return false;
            }
            charCount[ch] --;
        }
        for(int count : charCount) {
            if(count > 0) {
                return false;
            }
        }
        return true;
    }
}
