/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
const Mirror = root => {
    if(root == null) {
        return;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    Mirror(root.left);
    Mirror(root.right);
}