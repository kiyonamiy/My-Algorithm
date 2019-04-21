import java.util.ArrayList;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 14:28
 * 5min
 */
public class Solution {
    private List<Integer> list = new ArrayList<>();

    public List<Integer> preorderTraversal(TreeNode root) {
        preOder(root);
        return list;
    }

    private void preOder(TreeNode node) {
        if(node == null) {
            return;
        }
        list.add(node.val);
        preOder(node.left);
        preOder(node.right);
    }
}
