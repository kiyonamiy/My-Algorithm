import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 19:03
 * 10min
 */
//利用两个队列，一个队列用来存储所有下一级的所有子节点（分层），另一个队列是用来处理内容。
public class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        Queue<TreeNode> queue = new ArrayDeque<>();
        Queue<TreeNode> waitQueue = new ArrayDeque<>();
        waitQueue.add(root);

        while(!waitQueue.isEmpty()) {
            while(!waitQueue.isEmpty()) {
                queue.add(waitQueue.remove());
            }
            List<Integer> level = new ArrayList<>();
            while(!queue.isEmpty()) {
                TreeNode treeNode = queue.remove();
                level.add(treeNode.val);
                if(treeNode.left != null) {
                    waitQueue.add(treeNode.left);
                }
                if(treeNode.right != null) {
                    waitQueue.add(treeNode.right);
                }
            }
            result.add(level);
        }

        return result;
    }
}
