import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

/**
 * @author KiyonamiYu
 * @date 2019/4/22 10:01
 * 10min
 */
public class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        Queue<LevelTreeNode> queue = new ArrayDeque<>();
        queue.add(new LevelTreeNode(root, 0));

        while(!queue.isEmpty()) {
            LevelTreeNode levelTreeNode = queue.remove();
            TreeNode node = levelTreeNode.node;
            int level = levelTreeNode.level;

            if(queue.isEmpty() || queue.peek().level > level) {
                result.add(node.val);
            }
            if(node.left != null) {
                queue.add(new LevelTreeNode(node.left, level + 1));
            }
            if(node.right != null) {
                queue.add(new LevelTreeNode(node.right, level + 1));
            }
        }

        return result;
    }
}
