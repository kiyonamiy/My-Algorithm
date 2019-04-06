import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * @author KiyonamiYu
 * @date 2019/4/6 14:27
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null) {
            return true;
        }
        //if(p == null && q != null || p != null && q == null) {
        if(p == null || q == null) {
            return false;
        }
        Queue<TreeNode> queue1 = new LinkedBlockingQueue<>();
        Queue<TreeNode> queue2 = new LinkedBlockingQueue<>();

        queue1.add(p);
        queue2.add(q);
        while(!queue1.isEmpty() && !queue2.isEmpty()) {
            TreeNode cur1 = queue1.remove();
            TreeNode cur2 = queue2.remove();
            if(cur1.val != cur2.val) {
                return false;
            }
            if(cur1.left != null && cur2.left != null) {
                queue1.add(cur1.left);
                queue2.add(cur2.left);
            } else if(cur1.left != null || cur2.left != null) {
                return false;
            }
            if(cur1.right != null && cur2.right != null) {
                queue1.add(cur1.right);
                queue2.add(cur2.right);
            } else if(cur1.right != null || cur2.right != null) {
                return false;
            }
        }
        if(queue1.isEmpty() && queue2.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
}
