/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const recursion = root => {
    if (root == null) {
      return;
    }
    recursion(root.left);
    result.push(root.val);
    recursion(root.right);
  };
  recursion(root);
  return result;
};
