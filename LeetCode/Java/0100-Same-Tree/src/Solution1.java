/**
 * @author KiyonamiYu
 * @date 2019/4/6 15:05
 */
public class Solution1 {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null) {
            return true;
        }
        //if(p == null && q != null || p != null && q == null) {
        if(p == null || q == null) {
            return false;
        }
        if(p.val != q.val) {
            return false;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
