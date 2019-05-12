/**
 * @author KiyonamiYu
 * @date 2019/5/12 21:09
 */
class Solution {
    private int count = 0;

    public int countNodes(TreeNode root) {
        if(root == null) {
            return 0;
        }
        count ++;
        countNodes(root.left);
        countNodes(root.right);

        return count;
    }

}
