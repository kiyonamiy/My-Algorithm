/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = (t1, t2) => {
  if (t1 == null) {
    return t2;
  }
  if (t2 == null) {
    return t1;
  }
  const newValue = t1.val + t2.val;
  const newNode = new TreeNode(newValue);
  // 先考虑t1、t2都不会空的情况，是如何合并的，再想哪些边界
  // 如果是要新生成一棵树，肯定要重新确定这三样val、left、right
  newNode.left = mergeTrees(t1.left, t2.left);
  newNode.right = mergeTrees(t1.right, t2.right);
  return newNode;
};
