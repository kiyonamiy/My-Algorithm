/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {

    let result = 0;

    const recurse = r => {
        if(r == null) {
            return;
        }
        if(r.val >= L && r.val <= R) {
            result += r.val;
        }
        recurse(r.left);
        recurse(r.right);
    }

    recurse(root);
    return result;

};