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
var isValidBST = function(root) {
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
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] >= result[i + 1]) {
      return false;
    }
  }
  return true;
};
