/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root == null) {
        return [];
    }

    const result = [];

    const queue = [];
    root.level = 0;
    queue.push(root);

    let nowLevel = 0, count = 0, sum = 0;
    while(queue.length > 0) {
        const front = queue.shift();
        if(front.level === nowLevel) {
            count ++;
            sum += front.val;
        } else {
            result.push(sum / count);

            nowLevel ++;

            count = 1;
            sum = front.val;
        }

        if(front.left != null) {
            front.left.level = front.level + 1;
            queue.push(front.left);
        }

        if(front.right != null) {
            front.right.level = front.level + 1;
            queue.push(front.right);
        }
    }
    result.push(sum / count);

    return result;
};