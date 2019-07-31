function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Convert(root) {
    if(root == null) {
        return null;
    }
    if(root.left == null && root.right == null) {
        return root;
    }
    // 构建 左子树的双向链表 取头
    const leftLinkedListHead = Convert(root.left);
    // 将 左子树构成的双向链表的最后一个节点 和 根节点 相连接
    let cur = leftLinkedListHead;
    while(cur != null && cur.right != null) {
        cur = cur.right;
    }
    if(leftLinkedListHead != null) {
        cur.right = root;
        root.left = cur;
    }
    // 构建 右子树的双向链表 取头
    const rightLinkedListHead = Convert(root.right);
    // 将 根节点 和 右子树构成的双向链表的第一个节点 相连接
    if(rightLinkedListHead != null) {
        root.right = rightLinkedListHead;
        rightLinkedListHead.left = root;
    }

    return leftLinkedListHead || root;
}