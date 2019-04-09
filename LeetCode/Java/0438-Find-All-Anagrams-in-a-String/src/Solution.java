import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/9 8:45
 */
public class Solution {
    //找特定条件的连续字串，选择滑动窗口
    //模板
    public List<Integer> findAnagrams(String s, String t) {
        List<Integer> result = new LinkedList<>();
        if(t.length() > s.length()) {
            return result;
        }

        Map<Character, Integer> map = new HashMap<>();
        for(char c : t.toCharArray()) {
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        int counter = map.size();

        int begin = 0, end = 0;

//        int len = Integer.MAX_VALUE;

        while(end < s.length()) {
            char c = s.charAt(end);

            if(map.containsKey(c)) {
                map.put(c, map.get(c) - 1);
                if(map.get(c) == 0) {
                    counter --;
                }
            }

            end ++;

            while(counter == 0) {
                char tempc = s.charAt(begin);
                if(map.containsKey(tempc)) {
                    map.put(tempc, map.get(tempc) + 1);
                    if(map.get(tempc) > 0) {
                        counter ++;
                    }
                }
                /* save / update(min/max) the result if find a target*/
                // result collections or result int value
                if(end - begin == t.length()) {
                    result.add(begin);
                }

                begin ++;
            }
        }

        return result;
    }
}
