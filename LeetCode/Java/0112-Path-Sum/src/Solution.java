/**
 * @author KiyonamiYu
 * @date 2019/5/13 10:36
 * 21min
 */
public class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if(root == null) {
            return false;
        }
//        if(root.left != null && root.right == null) {
//            return hasPathSumHelper(root.left, root.val, sum);
//        }
//        if(root.left == null && root.right != null) {
//            return hasPathSumHelper(root.right, root.val, sum);
//        }
        return hasPathSumHelper(root, 0, sum);
    }

    public boolean hasPathSumHelper(TreeNode root, int nowSum, int targetSum) {
        if(root == null) {
            return false;
        }
        if(root.left == null && root.right == null) {
            return nowSum + root.val == targetSum;
        }
        return hasPathSumHelper(root.left, nowSum + root.val, targetSum) || hasPathSumHelper(root.right, nowSum + root.val, targetSum);

    }
}
