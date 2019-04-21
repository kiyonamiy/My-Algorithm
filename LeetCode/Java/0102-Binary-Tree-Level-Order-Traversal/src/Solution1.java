import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

/**
 * @author KiyonamiYu
 * @date 2019/4/21 19:22
 */
//自己创建新的LevelTreeNode来保存节点对应的层级，每次都是往对应层级添加。result.get(level).add(treeNode.val)
public class Solution1 {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) {
            return result;
        }
        Queue<LevelTreeNode> queue = new ArrayDeque<>();
        queue.add(new LevelTreeNode(root, 0));
        while(!queue.isEmpty()) {
            LevelTreeNode levelTreeNode = queue.remove();
            TreeNode treeNode = levelTreeNode.treeNode;
            int level = levelTreeNode.level;
            //level + 1 = size
            if(levelTreeNode.level == result.size()) {
                result.add(new ArrayList<>());
            }
            result.get(level).add(treeNode.val);
            if(treeNode.left != null) {
                queue.add(new LevelTreeNode(treeNode.left, level + 1));
            }
            if(treeNode.right != null) {
                queue.add(new LevelTreeNode(treeNode.right, level + 1));
            }
        }

        return result;
    }
}
