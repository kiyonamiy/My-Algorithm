/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 明确定义，左右区间都是闭区间。
// 细心
// 感觉做了好几遍了，这次用下标遍历，一次过

var buildTree = function(preorder, inorder) {
  const buildTreeHelper = function(
    preStartIndex,
    preEndIndex,
    inStartIndex,
    inEndIndex
  ) {
    if (preStartIndex > preEndIndex || inStartIndex > inEndIndex) {
      return null;
    }
    const rootVal = preorder[preStartIndex]; // 本次递归的根

    let rootInIndex = -1;
    for (let i = inStartIndex; i <= inEndIndex; i++) {
      // 注意明确的定义，右边界是闭区间
      if (inorder[i] === rootVal) {
        rootInIndex = i;
        break;
      }
    }
    const leftLength = rootInIndex - inStartIndex;
    const rightLength = inEndIndex - rootInIndex;

    const root = new TreeNode(rootVal);
    root.left = buildTreeHelper(
      preStartIndex + 1,
      preStartIndex + leftLength,
      inStartIndex,
      rootInIndex - 1
    );
    root.right = buildTreeHelper(
      preStartIndex + 1 + leftLength,
      preEndIndex,
      rootInIndex + 1,
      inEndIndex
    );
    return root;
  };
  return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
};
