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

// 判断一棵树是否镜像对称。
// 左子树是对称的 & 右子树也是对称的 =/=>这个树是对称的
// 因为左子树的根节点和右子树的根节点可能不同。

// 如果问题不够递归，那就拆解结构，往递归解决的方向靠近。
// 就像这道题，不能从左右子树对称立即推该树对称，但可以转换为左右两个子树的子树镜像对称+左右子树根相等。

var isSymmetric = function(root) {
  if (root == null || (root.left == null && root.right == null)) {
    return true;
  }
  // 递归判断左右子树是否镜像对称。
  const recursion = (root1, root2) => {
    if (root1 == null && root2 === null) {
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
  return recursion(root.left, root.right) && root.left.val === root.right.val;
};
