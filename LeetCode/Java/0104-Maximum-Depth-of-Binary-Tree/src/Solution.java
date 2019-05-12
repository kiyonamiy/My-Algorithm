/**
 * @author KiyonamiYu
 * @date 2019/5/12 17:04
 */
class Solution {
    public int maxDepth(TreeNode root) {
        return maxDepth(root, 0);
    }

    private int maxDepth(TreeNode root, int depth) {
        if(root == null) {
            return depth;
        }
        return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
    }
}
