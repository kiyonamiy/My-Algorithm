/**
 * @author KiyonamiYu
 * @date 2019/4/11 21:51
 */
public class Solution {
    public int numJewelsInStones(String J, String S) {
        boolean[] isJewels = new boolean[256];
        for(char ch : J.toCharArray()) {
            isJewels[ch] = true;
        }
        int count = 0;
        for(char ch : S.toCharArray()) {
            if(isJewels[ch]) {
                count ++;
            }
        }
        return count;
    }
}