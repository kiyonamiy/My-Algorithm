/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 题目：左右翻转二叉树
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root == null) {
    return null;
  }
  const node = new TreeNode();
  node.val = root.val;
  node.left = invertTree(root.right);
  node.right = invertTree(root.left);
  return node;
};
