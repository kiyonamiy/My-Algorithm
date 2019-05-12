/**
 * @author KiyonamiYu
 * @date 2019/5/12 17:25
 */
class Solution {
    public int minDepth(TreeNode root) {
        if(root == null) {
            return 0;
        }

        int leftMinDepth = minDepth(root.left);
        int rightMinDepth = minDepth(root.right);

        //如果左右子树中出现其中一个为0的情况，则取二者最大值（leftMinDepth + rightMinDepth + 1，其中一个为0）。（包括二者都为0的情况）（陷阱在此）
        //否则就取二者较短的路径
        return (leftMinDepth == 0 || rightMinDepth == 0) ? leftMinDepth + rightMinDepth + 1 : Math.min(leftMinDepth, rightMinDepth) + 1;
    }
}