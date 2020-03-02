/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) {
    return true;
  }
  const recursion = (root1, root2) => {
    if (root1 == null && root2 == null) {
      return true;
    }
    if (root1 == null || root2 == null) {
      return false;
    }

    return (
      recursion(root1.left, root2.right) &&
      recursion(root1.right, root2.left) &&
      root1.val === root2.val
    );
  };

  return recursion(root.left, root.right);
};
