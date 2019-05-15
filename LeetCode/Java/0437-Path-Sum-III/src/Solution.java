/**
 * @author KiyonamiYu
 * @date 2019/5/15 22:58
 */
public class Solution {
    public int pathSum(TreeNode root, int sum) {
        if(root == null) {
            return 0;
        }
        return findPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
//        //计算如果包含该节点所有路径数
//        int res = findPath(root, sum);
//        //计算除了该节点，其他所有路径数
//        res += pathSum(root.left, sum);
//        res += pathSum(root.right, sum);
//
//        return res;
    }

    //寻找包含node所有的路径
    private int findPath(TreeNode node, int sum) {
        if(node == null) {
            return 0;
        }
        int res = 0;
        //因为存在负数，所以不能return，必须走到底寻找所有可能
        if(node.val == sum) {
            res ++;
        }
        res += findPath(node.left, sum - node.val);
        res += findPath(node.right, sum - node.val);

        return res;
    }
}
