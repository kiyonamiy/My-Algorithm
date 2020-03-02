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

// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

var diameterOfBinaryTree = function(root) {
  let maxDiameter = 0; // 不断更新最值
  const getDepth = root => {
    if (root == null) {
      return 0;
    }
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth); // 最大半径 = 左边最大深度 + 右边最大深度

    return Math.max(leftDepth, rightDepth) + 1;
  };
  getDepth(root);
  return maxDiameter;
};
