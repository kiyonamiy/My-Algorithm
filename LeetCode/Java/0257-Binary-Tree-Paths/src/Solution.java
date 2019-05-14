import java.util.ArrayList;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/5/14 14:55
 * 30min
 */
public class Solution {

    private List<String> treePaths = new ArrayList<>();

    public List<String> binaryTreePaths(TreeNode root) {
        if(root == null) {
            return treePaths;
        }

        dfs(root, "");
        return treePaths;
    }

    private void dfs(TreeNode root, String path) {
        if(root == null) {
            return;
        }
        if(root.left == null && root.right == null) {
            treePaths.add(path + root.val);
            return;
        }
        //居然在纠结箭头的摆放的前后，path在前即可
        dfs(root.left, path + root.val + "->");
        dfs(root.right, path + root.val + "->");
    }
}
