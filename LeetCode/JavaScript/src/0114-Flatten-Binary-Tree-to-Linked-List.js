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
var flatten = (root) => {
    let pre = null;
    const recursion = nowRoot => {
        if(nowRoot == null) {
            return;
        }
        recursion(nowRoot.right);
        recursion(nowRoot.left);
        nowRoot.right = pre;
        nowRoot.left = null;
        pre = nowRoot;
    }
    recursion(root);
};