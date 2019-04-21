import java.util.ArrayList;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 14:44
 * 3min
 */
class Solution {
    private List<Integer> list;

    public Solution() {
        this.list = new ArrayList<>();
    }

    public List<Integer> inorderTraversal(TreeNode root) {
        inorder(root);
        return list;
}

    private void inorder(TreeNode node) {
        if(node == null) {
            return;
        }
        inorder(node.left);
        list.add(node.val);
        inorder(node.right);
    }
}
