/**
 * @author KiyonamiYu
 * @date 2019/4/7 11:06
 */
public class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while(left < right) {
            int lInt = isAlphanumeric(s.charAt(left));
            int rInt = isAlphanumeric(s.charAt(right));
            if(lInt < 0) {
                left ++;
            } else if(rInt < 0) {
                right --;
            } else {
                if(lInt != rInt) {
                    return false;
                } else {
                    left ++;
                    right --;
                }
            }
        }
        return true;
    }

    private int isAlphanumeric(char ch) {
        if(ch >= 'a' && ch <= 'z') {
            return ch - 'a';
        } else if(ch >= 'A' && ch <= 'Z') {
            return ch - 'A';
        } else if(ch >= '0' && ch <= '9') {
            return ch;
        } else {
            return -1;
        }
    }
}
