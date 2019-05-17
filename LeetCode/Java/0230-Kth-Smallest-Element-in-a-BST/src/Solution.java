import java.util.ArrayList;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/5/17 16:44
 * 5min
 */
public class Solution {

    private List<Integer> list = new ArrayList<>();

    private int count = 0;
    private int result = Integer.MIN_VALUE;

    public int kthSmallest(TreeNode root, int k) {
        inorder(root, k);
        return result;
    }

    private void inorder(TreeNode root, int k) {
        if(root == null) {
            return;
        }
        inorder(root.left, k);
        count ++;
        if (count == k) {
            result = root.val;
        }
        inorder(root.right, k);
    }
}
