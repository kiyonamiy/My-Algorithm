/**
 * @author KiyonamiYu
 * @date 2019/4/7 11:31
 */
public class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while(left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left ++;
            right --;
        }
    }
}
