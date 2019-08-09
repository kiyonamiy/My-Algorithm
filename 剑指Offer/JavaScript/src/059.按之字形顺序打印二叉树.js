/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    const result = [];
    if(pRoot == null) {
        return result;
    }

    pRoot.level = 0;

    const queue = [];
    queue.push(pRoot);
    // 正常的层序遍历
    while(queue.length !== 0) {
        const nowNode = queue.shift();
        const level = nowNode.level;
        // 添加新的一层
        if(level === result.length) {
            result.push([]);        // result.length + 1 同层的不会继续添加 空数组
        }
        result[level].push(nowNode.val);
        if(nowNode.left != null) {
            nowNode.left.level = level + 1;
            queue.push(nowNode.left);
        }
        if(nowNode.right != null) {
            nowNode.right.level = level + 1;
            queue.push(nowNode.right);
        }
    }
    // 奇数层反转
    result.forEach((item, index) => {
        if(index % 2 === 1) {
            item.reverse();
        }
    })

    return result;
}