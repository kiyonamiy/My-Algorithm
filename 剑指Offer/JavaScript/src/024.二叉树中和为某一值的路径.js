/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-30 14:51:17 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-30 15:01:44
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindPath(root, expectNumber)
{
    const result = [];

    if(root == null) {
        return result;
    }

    const recursion = (array, root, expectNumber) => {

        if(expectNumber < 0) {
            return;
        }

        array.push(root.val);
        // 叶节点
        if(root.left == null && root.right == null) {
            if(root.val === expectNumber) {
                result.push(array);
            }
            return;
        }
        // 继续往左右节点寻找
        if(root.left != null) {
            recursion([...array], root.left, expectNumber - root.val);      // 注意 [...array] 否则就一直只是操作一个数组
        }
        if(root.right != null) {
            recursion([...array], root.right, expectNumber - root.val);
        }
    }

    recursion([], root, expectNumber);
    return result;
}