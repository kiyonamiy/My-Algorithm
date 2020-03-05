/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 2020-03-05 腾讯面试题
// 这 nm 不会做？？？
// 问第 k 大，反中序遍历阿
var kthSmallest = function(root, k) {
  const result = [];
  const recursion = root => {
    if (root == null || result.length > k) {
      return;
    }
    recursion(root.left);
    result.push(root.val);
    recursion(root.right);
  };
  recursion(root);
  return result[k - 1];
};
