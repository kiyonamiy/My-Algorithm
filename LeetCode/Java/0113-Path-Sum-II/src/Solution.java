import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/5/15 9:19
 * 8min
 */
class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> res = new ArrayList<>();

        if(root == null) {
            return res;
        }

        if(root.left == null && root.right == null && sum == root.val) {
            List<Integer> list = new LinkedList<>();
            list.add(root.val);
            res.add(list);
        }

        List<List<Integer>> leftRes = pathSum(root.left, sum - root.val);
        for(int i = 0; i < leftRes.size(); i ++) {
            leftRes.get(i).add(0, root.val);
        }
        res.addAll(leftRes);
        List<List<Integer>> rightRes = pathSum(root.right, sum - root.val);
        for(int i = 0; i < rightRes.size(); i ++) {
            rightRes.get(i).add(0, root.val);
        }
        res.addAll(rightRes);

        return res;
    }
}
