/**
 * @author KiyonamiYu
 * @date 2019/5/17 17:14
 */
public class Solution {

    private TreeNode ans;

    public Solution() {
        ans = null;
    }

    public TreeNode lowestCommonAncestor(TreeNode currentNode, TreeNode p, TreeNode q) {
        recurseTree(currentNode, p, q);
        return ans;
    }

    private boolean recurseTree(TreeNode currentNode, TreeNode p, TreeNode q) {
        if(currentNode == null) {
            return false;
        }

        int left = recurseTree(currentNode.left, p, q) ? 1 : 0;
        int right = recurseTree(currentNode.right, p, q) ? 1 : 0;
        int mid = (currentNode == p || currentNode == q) ? 1 : 0;

        //只要两个条件成立，即该节点满足条件
        if(left + right + mid >= 2) {
            ans = currentNode;
        }

        return (left + right + mid > 0);
    }
}
