import java.util.HashMap;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/16 12:37
 */
public class Solution {
    public int numberOfBoomerangs(int[][] points) {
        //遍历所有点将其作为枢纽点，求该点到其他点的所有距离
        //每个map记录的是距离和该距离的频次，如果频次>2，可以排列组合取两个点，与枢纽点构成三个点。
        int result = 0;
        for(int i = 0; i < points.length; i ++) {
            Map<Integer, Integer> map = new HashMap<>();

            for(int j = 0; j < points.length; j ++) {
                if(j == i) {
                    continue;
                }
                int disPow = disPow(points[i], points[j]);
                map.put(disPow, map.getOrDefault(disPow, 0) + 1);
            }
            for(Integer v : map.values()) {
//                if(v >= 2) {
                    result += v * (v - 1);
//                }
            }
        }
        return result;
    }

    private int disPow(int[] point1, int[] point2) {
        return (int)(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
    }
}
