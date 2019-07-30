/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-30 14:13:21 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-30 14:19:12
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    let result = [];
    if(root == null) {
        return result;
    }

    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
        const queueTop = queue.shift();
        result.push(queueTop.val);

        if(queueTop.left != null) {
            queue.push(queueTop.left);
        }
        if(queueTop.right != null) {
            queue.push(queueTop.right);
        }
    }
    return result;
}