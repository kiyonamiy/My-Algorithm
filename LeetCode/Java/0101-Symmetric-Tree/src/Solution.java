/**
 * @author KiyonamiYu
 * @date 2019/5/12 20:49
 */
public class Solution {
    public boolean isSymmetric(TreeNode root) {
        if(root == null) {
            return true;
        }
        return isSymmetricHelper(root.left, root.right);
    }

    //拆成两棵树，转化为比较两棵树是否完全相同，没有想到
    private boolean isSymmetricHelper(TreeNode p, TreeNode q) {
        if(p == null && q == null) {
            return true;
        }
//        if(p == null && q != null || p != null && q == null) {
        if(p == null || q == null) {
            return false;
        }
        if(p.val != q.val) {
            return false;
        }
        return isSymmetricHelper(p.left, q.right) && isSymmetricHelper(p.right, q.left);
    }
}
