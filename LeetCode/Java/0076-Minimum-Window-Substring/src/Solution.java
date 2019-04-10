import java.util.HashMap;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/10 10:14
 */
public class Solution {
    public String minWindow(String s, String t) {
        String result = "";
        if(t.length() > s.length()) {
            return result;
        }

        Map<Character, Integer> map = new HashMap<>();
        for(char c : t.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        int count = map.size();

        int minLen = Integer.MAX_VALUE;

        int left = 0, right = 0;

        //Right：第一次满足条件
        while(right < s.length()) {
            char chR = s.charAt(right);

            if(map.containsKey(chR)) {
                map.put(chR, map.get(chR) - 1);
                if(map.get(chR) == 0) {
                    count --;
                }
            }

            right ++;

            //Left：第一次失效
            while(count == 0) {
                //System.out.println(s.substring(left, right));
                if(right - left + 1 < minLen) {
                    result = s.substring(left, right);
                    minLen = right - left + 1;
                }

                Character chL = s.charAt(left);
                if(map.containsKey(chL)) {
                    map.put(chL, map.get(chL) + 1);
                    if(map.get(chL) > 0) {
                        count ++;
                    }
                }

                left ++;
            }
        }

        return result;
    }
}
