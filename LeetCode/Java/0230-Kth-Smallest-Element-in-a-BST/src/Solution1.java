/**
 * @author KiyonamiYu
 * @date 2019/5/17 17:01
 */
import java.util.ArrayList;
import java.util.List;

public class Solution1 {

    private List<Integer> list = new ArrayList<>();

    public int kthSmallest(TreeNode root, int k) {
        inorder(root);
        return list.get(k - 1);
    }

    private void inorder(TreeNode root) {
        if(root == null) {
            return;
        }
        inorder(root.left);
        list.add(root.val); //if(list.size() == k) return;
        inorder(root.right);
    }
}

