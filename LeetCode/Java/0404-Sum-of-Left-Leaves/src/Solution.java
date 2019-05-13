/**
 * @author KiyonamiYu
 * @date 2019/5/13 11:12
 */
public class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if(root == null) {
            return 0;
        }
        //所有叶节点和
//        if(root.left == null && root.right == null) {
//            return root.val;
//        }
        if(root.left != null && root.left.left == null && root.left.right == null) {
//            return root.left.val; //这里断了累加
            return sumOfLeftLeaves(root.right) + root.left.val;
        }
        return sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left);
    }
}
