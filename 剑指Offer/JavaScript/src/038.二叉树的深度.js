// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }

function TreeDepth(pRoot)
{
    const recursion = (root, depth) => {
        if(root == null) {
            return depth;
        }
        return Math.max(recursion(root.left, depth + 1), recursion(root.right, depth + 1));
    }
    return recursion(pRoot, 0);
}
