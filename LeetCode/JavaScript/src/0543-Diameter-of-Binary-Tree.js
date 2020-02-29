/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 题目：
// 给定一棵二叉树，你需要计算它的*直径长度*。
// 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
// *不一定穿过根节点！**穿过根节点的不一定是最长的！*
// 只需要结合最大深度+递归过程中全程保持最值即可。

// 当求解树的最值问题的时候，*觉得最值不一定是在根节点的时候*，在函数内部重新定义递归函数和最值变量，在递归过程中不断保存更新最值。

var diameterOfBinaryTree = function(root) {
  if (root == null) {
    return 0;
  }
  let maxDiameter = 0;
  const maxDepth = root => {
    if (root == null) {
      return 0;
    }

    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);

    // 在求树的最大深度的过程中，时刻更新最大直径。
    maxDiameter = Math.max(maxDiameter, leftMaxDepth + rightMaxDepth);
    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  };

  maxDepth(root);
  return maxDiameter;
};
