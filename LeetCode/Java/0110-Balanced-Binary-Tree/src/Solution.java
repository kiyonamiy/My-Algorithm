
/**
 * @author KiyonamiYu
 * @date 2019/5/12 21:18
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        if(root == null) {
            return true;
        }
        //明确平衡二叉树定义：左子树平衡、右子树平衡、左右子树高度差<=1
        return isBalanced(root.left) &&
                isBalanced(root.right) &&
                Math.abs(depth(root.left) - depth(root.right)) <= 1;
    }

    //！！！
    private int depth(TreeNode root) {
        if(root == null) {
            return 0;
        }
        return Math.max(depth(root.left), depth(root.right)) + 1;
    }
}