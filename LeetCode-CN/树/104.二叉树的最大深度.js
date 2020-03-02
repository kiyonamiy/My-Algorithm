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

// 想拿到左子树的最大深度，拿到右子树的最大深度，根节点做一次操作，能不能推出最后的解。

var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }
  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);
  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
};
