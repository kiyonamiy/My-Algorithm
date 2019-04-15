import java.util.HashMap;
import java.util.Map;

/**
 * @author KiyonamiYu
 * @date 2019/4/15 19:42
 */
public class Solution {
    //将a+b+c+d=0的问题转换为(a+b)+(c+d)=0，进而再转化为(a+b)=-(c+d)
    public int fourSumCount(int[] A, int[] B, int[] C, int[] D) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < A.length; i ++) {
            for(int j = 0; j < B.length; j ++) {
                map.put(A[i] + B[j], map.getOrDefault(A[i] + B[j], 0) + 1);
            }
        }
        int result = 0;
        for(int i = 0; i < C.length; i ++) {
            for(int j = 0; j < D.length; j ++) {
                result += map.getOrDefault(-(C[i] + D[j]), 0);
            }
        }
        return result;
    }
}
