// 平衡二叉树，且具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function IsBalanced_Solution(pRoot)
{
    const recursion = root => {
        if(root == null) {
            return 0;
        }
        const leftDepth = recursion(root.left);
        if(leftDepth === -1) {
            return -1;
        }
        const rightDepth = recursion(root.right);
        if(rightDepth === -1) {
            return -1;
        }
        return Math.abs(leftDepth - rightDepth) <= 1 ? Math.max(leftDepth, rightDepth) + 1 : -1;
    }
    return recursion(pRoot) != -1;
}
