function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 * 
 * 空间复杂度会高，但是算法看起来简单，不需要记忆下标变换！
 */

function reConstructBinaryTree(pre, vin) {
    if(pre.length === 0 || vin.length === 0) {
        return null;
    }

    let root = new TreeNode(pre[0]);

    const nextLeftPre = [], nextLeftVin = [];
    const nextRightPre = [], nextRightVin = [];

    let flagIndex = -1;
    for(let i = 0; i < vin.length; i ++) {
        if(vin[i] === root.val) {
            flagIndex = i;
            continue;
        }
        if(flagIndex < 0) {
            nextLeftVin.push(vin[i]);
        } else {
            nextRightVin.push(vin[i]);
        }
    }

    let count = flagIndex - 0;
    for(let i = 1; i < pre.length; i ++) {
        if(count > 0) {
            nextLeftPre.push(pre[i]);
            count --;
        } else {
            nextRightPre.push(pre[i]);
        }
    }

    // test
    // console.log("左子树 pre vin");
    // console.log(nextLeftPre, nextLeftVin);
    // console.log("右子树 pre vin");
    // console.log(nextRightPre, nextRightVin);

    root.left = reConstructBinaryTree(nextLeftPre, nextLeftVin);
    root.right = reConstructBinaryTree(nextRightPre, nextRightVin);
    return root;
}

// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.left.right = new TreeNode(7);
// root.right = new TreeNode(3);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(6);
// root.right.right.left = new TreeNode(8);

// reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]);
