/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 给定一个二叉树，原地将它展开为链表。

var flatten = function(root) {
  let cur = new TreeNode(); // 防止第一次 cur.right = root 循环引用

  const recursion = root => {
    if (root == null) {
      return;
    }
    // 为了原地，先拿到断开，防止后面引用出现问题
    const leftRoot = root.left;
    const rightRoot = root.right;

    root.left = null;
    root.right = null;

    cur.right = root;
    cur = cur.right;

    recursion(leftRoot);
    recursion(rightRoot);
  };

  recursion(root);
};
