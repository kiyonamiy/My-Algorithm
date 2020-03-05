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
var maxPathSum = function(root) {
  // 结果可能在中间，那就全局变量，一个套路！
  let maxSum = Number.NEGATIVE_INFINITY;
  const recursion = root => {
    if (root == null) {
      return 0;
    }
    // 拿到左右子树的最大路径（只有单条链）（负数就不要了）
    const leftResult = Math.max(recursion(root.left), 0);
    const rightResult = Math.max(recursion(root.right), 0);

    // 以这个节点连接左右的和
    maxSum = Math.max(maxSum, root.val + leftResult + rightResult);
    // 返回给它的父节点，只能走最大的那一条路+该节点（和取 maxSum 不同
    return root.val + Math.max(leftResult, rightResult);
  };
  recursion(root);
  return maxSum;
};
