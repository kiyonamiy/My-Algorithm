import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 23:23
 */
public class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        Queue<LevelTreeNode> queue = new ArrayDeque<>();
        queue.add(new LevelTreeNode(root, 0));
        while(!queue.isEmpty()) {
            LevelTreeNode levelTreeNode = queue.remove();
            TreeNode node = levelTreeNode.treeNode;
            int level = levelTreeNode.level;

            if(result.size() == level) {
                result.add(new ArrayList<>());
            }
            result.get(level).add(node.val);

            if(node.left != null) {
                queue.add(new LevelTreeNode(node.left, level + 1));
            }
            if(node.right != null) {
                queue.add(new LevelTreeNode(node.right, level + 1));
            }
        }
        List<List<Integer>> bottomResult = new ArrayList<>();
        for(int i = 0; i < result.size(); i ++) {
            bottomResult.add(result.get(result.size() - 1 - i));
        }
        return bottomResult;
    }
}
