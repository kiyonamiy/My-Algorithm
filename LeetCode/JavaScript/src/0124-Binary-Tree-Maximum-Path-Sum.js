/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// [5,4,8,11,null,13,4,7,2,null,null,null,1]
// 我之前输出的是 55 ，也就是所有数字的和。我就一直想不通，为什么答案是 48 。
// 我题意理解错了吗？？？
// 哦，一条路径。非根节点不能左右子树都走。但是你给的例子，完全看不出来一条路径的意思。感觉只要有最大即可。呵呵呵。

var maxPathSum = function(root) {
    if(root == null) {
        return 0;
    }
    let maxSum = root.val;
    const recursion = nowRoot => {
        if(nowRoot == null) {
            return;
        }

        recursion(nowRoot.left);
        recursion(nowRoot.right);

        let leftVal = 0;
        if(nowRoot.left != null && nowRoot.left.val > 0) {
            leftVal = nowRoot.left.val;
        }
        let rightVal = 0;
        if(nowRoot.right != null && nowRoot.right.val > 0) {
            rightVal = nowRoot.right.val;
        }

        if(leftVal > rightVal) {
            nowRoot.val += leftVal;
            maxSum = Math.max(maxSum, nowRoot.val + rightVal);      // 以当前节点为根节点做个转弯尝试，看看可不可以最大
        } else {
            nowRoot.val += rightVal;
            maxSum = Math.max(maxSum, nowRoot.val + leftVal);
        }
    }
    recursion(root);
    return maxSum;
};