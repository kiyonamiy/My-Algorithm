/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   const result = [];
//   if (root == null) {
//     return result;
//   }

//   root.level = 0;   // 可能面试官就会问，这样改变了结构，有没有其他方法
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     const nowNode = queue.shift();
//     if (result[nowNode.level] == null) {
//       result[nowNode.level] = [];
//     }
//     result[nowNode.level].push(nowNode.val);
//     if (nowNode.left != null) {
//       nowNode.left.level = nowNode.level + 1;
//       queue.push(nowNode.left);
//     }
//     if (nowNode.right != null) {
//       nowNode.right.level = nowNode.level + 1;
//       queue.push(nowNode.right);
//     }
//   }
//   return result;
// };

var levelOrder = function(root) {
  const result = [];
  if (root == null) {
    return result;
  }

  let level = 0;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    result.push([]); // 直接初始化新层级，因为这一次，都是一层一层的
    const nextLevel = []; // 为了分离这一层，下一层

    // 处理这一层
    while (queue.length > 0) {
      const nowNode = queue.shift();
      result[level].push(nowNode.val);
      if (nowNode.left != null) {
        nextLevel.push(nowNode.left);
      }
      if (nowNode.right != null) {
        nextLevel.push(nowNode.right);
      }
    }

    queue = nextLevel;
    level++;
  }

  return result;
};
