// var kthSmallest = function(root, k) {
//   const result = [];
//   const recursion = root => {
//     if (root == null || result.length > k) {
//       return;
//     }
//     recursion(root.left);
//     result.push(root.val);
//     recursion(root.right);
//   };
//   recursion(root);
//   return result[k - 1];
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 2020-03-05 腾讯面试题
// 这 nm 不会做？？？
// 没想起来中序遍历有序
var kthSmallest = function(root, k) {
  // 再优化了一点，都不需要数组，只是结果会在中间出现，需要一个变量记录
  let result = undefined;
  let cnt = 0;
  const recursion = root => {
    if (root == null || cnt > k) {
      return;
    }
    recursion(root.left);
    cnt++;
    if (cnt === k) {
      result = root.val;
    }
    recursion(root.right);
  };
  recursion(root);
  return result;
};
