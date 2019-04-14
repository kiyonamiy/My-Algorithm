import java.util.HashMap;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/14 20:35
 */
public class Solution {
    public boolean wordPattern(String pattern, String str) {
        String[] words = str.split(" ");
        if(words.length != pattern.length()) {
            return false;
        }
        Map<Character, String> map = new HashMap<>();
        int index = 0;
        for(char ch : pattern.toCharArray()) {
            if(!map.containsKey(ch)) {
                if(map.containsValue(words[index])) {
                    return false;
                }
                map.put(ch, words[index]);
            } else {
                if(!map.get(ch).equals(words[index])) {
                    return false;
                }
            }
            index ++;
        }
        return true;
    }
}
