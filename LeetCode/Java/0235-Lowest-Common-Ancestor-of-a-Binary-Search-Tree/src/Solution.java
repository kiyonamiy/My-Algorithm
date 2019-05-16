/**
 * @author KiyonamiYu
 * @date 2019/5/16 22:58
 * 10min
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root == null) {
            return null;
        }

        //都存在左子树
        if(p.val < root.val && q.val < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        }
        //都存在右子树
        if(p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        }
        //包含（ p 或者 q 其中一个是另一个的父节点的情况）和（ p 和 q 分别在 root 的左右两边的情况）
        return root;
    }
}
