/**
 * @author KiyonamiYu
 * @date 2019/5/13 10:59
 */
public class Solution1 {
    //没考虑到和可以变化
    public boolean hasPathSum(TreeNode root, int sum) {
        if(root == null) {
            return false;
        }
        if(root.left == null && root.right == null) {
            return sum - root.val == 0;
        }
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}
