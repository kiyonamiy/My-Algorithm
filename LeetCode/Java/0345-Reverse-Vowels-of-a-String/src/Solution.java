/**
 * @author KiyonamiYu
 * @date 2019/4/7 11:38
 */
public class Solution {
    public String reverseVowels(String s) {
        char[] chars = new char[s.length()];
        for(int i = 0; i < chars.length; i ++) {
            chars[i] = s.charAt(i);
        }
        int left = 0, right = chars.length - 1;
        while(left < right) {
            if(isVowel(chars[left]) && isVowel(chars[right])) {
                char temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
                left ++;
                right --;
            } else if(isVowel(chars[left]) && !isVowel(chars[right])) {
                right --;
            } else if(!isVowel(chars[left]) && isVowel(chars[right])) {
                left ++;
            } else {
                left ++;
                right --;
            }
        }
        return new String(chars);
    }

    private boolean isVowel(char ch) {
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U';
    }
}
