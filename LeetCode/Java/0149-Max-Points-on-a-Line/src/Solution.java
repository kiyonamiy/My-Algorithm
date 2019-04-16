import java.util.HashMap;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/16 15:03
 */
public class Solution {
    //既然除法会产生小数点，或者出现分母为零的情况，那就用a/b保留原式。
    //将point[i]作为枢纽点（相当于b已知），求斜率a即可求知道point[j]是否与point[i]同直线。
    public int maxPoints(int[][] points) {
        if(points.length == 0) {
            return 0;
        }
        int maxNum = 0;
        for(int i = 0; i < points.length; i ++) {
            Map<String, Integer> map = new HashMap<>();
            int duplicate = 0;
            for(int j = 0; j < points.length; j ++) {
                int deltaX = points[i][0] - points[j][0];
                int deltaY = points[i][1] - points[j][1];
                //会有重复元素，例如[[1, 1], [1, 1], [2, 2], [2, 2]]，都在同一直线，结果为4
                if(deltaX == 0 && deltaY == 0) {
                    duplicate ++;
                    continue;
                }
                int gcd = gcd(deltaX, deltaY);
                deltaX = deltaX / gcd;
                deltaY = deltaY / gcd;
                String gradient = deltaY + "/" + deltaX;
                map.put(gradient, map.getOrDefault(gradient, 0) + 1);
            }
            maxNum = Math.max(maxNum, duplicate);
            for(int freq : map.values()) {
                maxNum = Math.max(maxNum, freq + duplicate);
            }
        }
        return maxNum;
    }

    //寻找a和b的最大公约数（原理：辗转相除法）。x和y同时除以gcd的原因是，同时减小x和y使二者互质。（例如，将12,18变成2,3。）
    private int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
}
