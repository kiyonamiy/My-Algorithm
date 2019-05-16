/**
 * @author KiyonamiYu
 * @date 2019/5/16 23:36
 */
public class Solution {
    public boolean isValidBST(TreeNode root) {
        return dfs(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private boolean dfs(TreeNode root, long minVal, long maxVal) {
        if(root == null) {
            return true;
        }
        if(root.val >= maxVal || root.val <= minVal) {
            return false;
        }
        //左子树全部小于根节点，右节点全部大于根节点
        return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal);
    }
}
