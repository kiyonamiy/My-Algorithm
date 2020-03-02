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

// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-binary-trees
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 想法：当我拿到左子树的合并结果和右子树的合并结果，再拿到本节点的合并结果，是不是就能推出最后的结果。

var mergeTrees = function(t1, t2) {
  if (t1 == null) {
    return t2;
  }
  if (t2 == null) {
    return t1;
  }
  const node = new TreeNode();
  node.val = t1.val + t2.val;
  node.left = mergeTrees(t1.left, t2.left);
  node.right = mergeTrees(t1.right, t2.right);
  return node;
};
