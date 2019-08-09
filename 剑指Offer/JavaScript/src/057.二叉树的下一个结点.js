/**
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 */

 /*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

function GetNext(node)
{
    if(node == null) {
        return null;
    }
    // 如果有右子树，则找右子树的最左节点
    if(node.right != null) {
        node = node.right;
        while(node.left != null) {
            node = node.left;
        }
        return node;
    }

    // 没有右子树
    // 如果该节点是其父节点的左孩子，则返回父节点；否则继续向上遍历其父节
    while(node.next != null) {
        if(node.next.left == node) {
            return node.next;
        }
        node = node.next;
    }

    return null;    //退到了根节点仍没找到，则返回null
}