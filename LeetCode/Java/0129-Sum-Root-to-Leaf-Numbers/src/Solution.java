/**
 * @author KiyonamiYu
 * @date 2019/5/15 22:45
 * 5min
 */
public class Solution {

    private int sum = 0;

    public int sumNumbers(TreeNode root) {
        if(root == null) {
            return 0;
        }
        dfs(root, 0);
        return sum;
    }

    private void dfs(TreeNode root, int num) {
        if(root == null) {
            return;
        }
        if(root.left == null && root.right == null) {
            sum += num * 10 + root.val;
            return;
        }
        dfs(root.left, num * 10 + root.val);
        dfs(root.right, num * 10 + root.val);
    }
}
