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
// 右、中、左的遍历顺序
var convertBST = function(root) {
  let sum = 0; // 全局保存，这是一个不断累加的过程而已，右边最小，左边最大
  const convertBSTHelper = function(root) {
    if (root == null) {
      return;
    }
    convertBSTHelper(root.right); // 居然递归了convertBST原来的函数，我傻比了
    root.val += sum;
    sum = root.val;
    convertBSTHelper(root.left);
  };
  convertBSTHelper(root);
  return root;
};
