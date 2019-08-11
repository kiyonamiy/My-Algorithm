// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。
// 二叉搜索树，中序遍历即为从小到大。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k)
{
    let count = 0;
    const recursion = root => {
        if(root == null) {
            return null;
        }

        const leftResultNode = recursion(root.left);
        if(leftResultNode != null) {            // 看看左边有没有找到
            return leftResultNode;
        }

        count ++;
        if(count === k) {
            return root;
        }

        const rightResultNode = recursion(root.right);
        if(rightResultNode != null) {           // 看看右边有没有找到
            return rightResultNode;
        }
    }

    return recursion(pRoot);
}