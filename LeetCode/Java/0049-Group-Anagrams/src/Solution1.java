import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/16 11:16
 */
public class Solution1 {

    //每个字母对应一个质数
    //算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。
    //因为题目只有小写字母，所以争对题目只需要26个质数即可
    private int[] prime = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103 };

    public List<List<String>> groupAnagrams(String[] strs) {
        Map<Integer, List> map = new HashMap<>();
        for (String str : strs) {
            int key = 1;
            for(int i = 0; i < str.length(); i ++) {
                key *= prime[str.charAt(i) - 'a'];
            }
            if(!map.containsKey(key)) {
                map.put(key, new ArrayList());
            }
            map.get(key).add(str);
        }
        return new ArrayList(map.values());
    }

}
