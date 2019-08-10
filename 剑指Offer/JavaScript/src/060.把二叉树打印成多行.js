function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot)
{
    const result = [];
    if(pRoot === null) {
        return result;
    }

    pRoot.level = 0;
    const queue = [];
    queue.push(pRoot);
    while(queue.length !== 0) {
        const queueFront = queue.shift();
        if(queueFront.level === result.length) {
            result.push([]);
        }
        result[queueFront.level].push(queueFront.val);
        if(queueFront.left != null) {
            queueFront.left.level = queueFront.level + 1;
            queue.push(queueFront.left);
        }
        if(queueFront.right != null) {
            queueFront.right.level = queueFront.level + 1;
            queue.push(queueFront.right);
        }
    }
    return result;
}

// const treeNode1 = new TreeNode(1);
// const treeNode2 = new TreeNode(2);
// const treeNode3 = new TreeNode(3);

// treeNode1.left = treeNode2;
// treeNode1.right = treeNode3;

// console.log(Print(treeNode1));