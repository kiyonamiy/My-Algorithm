/**
 * @author KiyonamiYu
 * @date 2019/4/7 13:29
 */
public class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxContainer = -1;
        while(left < right) {
            int newContainer = getContainer(height, left, right);
            if(newContainer > maxContainer) {
                maxContainer = newContainer;
            }
            if(height[left] > height[right]) {
                right --;
            } else {
                left ++;
            }
        }
        return maxContainer;
    }

    private int getContainer(int[] height, int left, int right) {
        return Math.min(height[left], height[right]) * (right - left);
    }
}
