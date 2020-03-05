/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/er-cha-shu-de-zui-jin-gong-gong-zu-xian-by-leetcod/
// 最近公共祖先，我都做了多少次了，还是没能一次写出来
var lowestCommonAncestor = function(root, p, q) {
  // 因为结果是在中间出现的，所以要使用一个变量记录
  let ans = null;
  // 是否在该节点或者其左右子树找到 p 和 q
  const findNode = root => {
    if (root == null) {
      return false;
    }
    const leftResult = findNode(root.left) ? 1 : 0;
    const rightResult = findNode(root.right) ? 1 : 0;
    const rootResult = root === p || root === q ? 1 : 0;

    // && ans == null 不需要，因为只有一个节点（该ans节点一定是其父节点的左右一个节点，所以它的父节点=1，不可能有2的情况
    if (leftResult + rightResult + rootResult >= 2) {
      ans = root;
    }
    return rootResult + leftResult + rightResult > 0;
  };
  findNode(root);
  return ans;
};
