/**
 * 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSymmetrical(pRoot) {
    if(pRoot == null) {
        return true;
    }

    const recursion = (leftNode, rightNode) => {
        if(leftNode == null && rightNode == null) {
            return true;
        }
        if(leftNode == null && rightNode != null || leftNode != null && rightNode == null) {
            return false;
        }
        // 左右子树都不为 null 的情况
        if(leftNode.val !== rightNode.val) {
            return false;
        }
        return recursion(leftNode.left, rightNode.right) && recursion(leftNode.right, rightNode.left);
    }

    return recursion(pRoot.left, pRoot.right);
}
