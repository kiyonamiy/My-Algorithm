import java.util.ArrayList;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 14:50
 */
public class Solution {
    private List<Integer> list;

    public Solution() {
        this.list = new ArrayList<>();
    }

    public List<Integer> postorderTraversal(TreeNode root) {
        postorder(root);
        return list;
    }

    private void postorder(TreeNode node) {
        if(node == null) {
            return;
        }
        postorder(node.left);
        postorder(node.right);
        list.add(node.val);
    }
}
