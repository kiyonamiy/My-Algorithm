// 翻转一棵二叉树。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 想法：拿到左子树的翻转结果，拿到右子树的翻转结果，反转本节点，是不是就能推出最后的结果。
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
