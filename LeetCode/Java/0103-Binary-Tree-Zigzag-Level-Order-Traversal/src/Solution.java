import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

/**
 * @author KiyonamiYu
 * @date 2019/4/22 9:05
 */
public class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        Queue<LevelTreeNode> queue = new ArrayDeque<>();
        queue.add(new LevelTreeNode(root, 0));
        while(!queue.isEmpty()) {
            LevelTreeNode levelTreeNode = queue.remove();
            TreeNode node = levelTreeNode.node;
            int level = levelTreeNode.level;

            if(level == result.size()) {
                result.add(new ArrayList<>());
            }

            if(level % 2 == 0) {
                result.get(level).add(node.val);
            } else {
                result.get(level).add(0, node.val);
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
