/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 一开始的思路是从上到下，递归的时候每次记录其父节点（麻烦），取叶子节点的最大偷盗值（但是这样算只是一条路的）。

var rob = tree => {
    if(tree == null) {
        return 0;
    }

    // 后序遍历树 post order
    const recursion = root => {
        if(root == null || (root.left == null && root.right == null)) {
            return;
        }

        recursion(root.left);
        recursion(root.right);

        // 不偷 root（那就取左右子节点的和
        let plan1 = 0;
        if(root.left != null) {
            plan1 += root.left.val;
        }
        if(root.right != null) {
            plan1 += root.right.val;
        }
        // 偷 root（隔着左右子节点，去找 4 个孙子节点
        let plan2 = root.val;
        if(root.left != null) {
            if(root.left.left != null) {
                plan2 += root.left.left.val;
            }
            if(root.left.right != null) {
                plan2 += root.left.right.val;
            }
        }
        if(root.right != null) {
            if(root.right.left != null) {
                plan2 += root.right.left.val;
            }
            if(root.right.right != null) {
                plan2 += root.right.right.val;
            }
        }
        root.val = Math.max(plan1, plan2);
    };
    recursion(tree);

    return tree.val;
}