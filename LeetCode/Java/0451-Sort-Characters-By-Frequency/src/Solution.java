/**
 * @author KiyonamiYu
 * @date 2019/4/14 21:17
 */
public class Solution {
    public String frequencySort(String s) {
        int[] freq = new int[256];
        int count = 0;
        for(char ch : s.toCharArray()) {
            if(freq[ch] == 0) {
                count ++;
            }
            freq[ch] ++;
        }

        //因为hash，下标具有实际意义，不能直接Arrays.Sort(freq)，会导致下标乱序

        StringBuilder stringBuilder = new StringBuilder();
        while(count != 0) {
            int maxFreq = 0;
            int maxIndex = -1;
            for(int i = 0; i < freq.length; i ++) {
                if(freq[i] > maxFreq) {
                    maxFreq = freq[i];
                    maxIndex = i;
                }
            }
            while(freq[maxIndex] > 0) {
                stringBuilder.append((char)maxIndex);
                freq[maxIndex] --;
            }
            count --;
        }
        return stringBuilder.toString();
    }
}
