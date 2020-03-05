# 树

## 心得

0. 基础：先不要考虑边界，先考虑拿到左右子树的递归结果，能否通过当前节点，完成题目要求。
1. 最终（优）解是通过根节点求出，可以考虑后序遍历。（把左右子树当作已知解，来求解根节点）。
1. 当左子树和右子树满足定义，但是并不能递推出最后结果。可以考虑拆分为（左右子树+根特判）。
1. 满足题意的节点不是根节点，而是在中间，**可以在全局设置一个变量**，寻找满足题意的节点（如果是求最值，则不断更新该变量）。
1. 看到二叉搜索树（BST），先想到**中序遍历**！从小到大有序！！！

| 问题                                                                                                                              | 标签                               | 描述                                                                       | 题解                                                  | 难度（成功/失败） |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------- |
| [617.合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)                                                        | [top][后序][重构]                  | 合并两颗二叉树（相同位置节点值相加）                                       | [JavaScript](./617.合并二叉树.js)                     | Easy(2/0)         |
| [226.翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)                                                            | [top][后序][重构]                  | 左右翻转一颗二叉树。                                                       | [JavaScript](./226.翻转二叉树.js)                     | Easy(2/0)         |
| [104.二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)                                            | [top][后序]                        | 给定一个二叉树，找出其最大深度。                                           | [JavaScript](./104.二叉树的最大深度.js)               | Easy(2/0)         |
| [538.把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)                                    | [top][中序][BST]                   | 转换成为累加树，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。 | [JavaScript](./538.把二叉搜索树转换为累加树.js)       | Easy(0/1)         |
| [101.对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)                                                                | [top][后序]                        | 给定一个二叉树，检查它是否是镜像对称的。                                   | [JavaScript](./101.对称二叉树.js)                     | Easy(1/0)         |
| [543.二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)                                                     | [top][后序]                        | 给定一棵二叉树，你需要计算它的直径长度。                                   | [JavaScript](./543.二叉树的直径.js)                   | Easy(1/0)         |
| [94.二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)                                            | [top][中序][遍历][太简单]          | 给定一个二叉树，返回它的中序遍历。                                         | [JavaScript](./94.二叉树的中序遍历.js)                | Medium(1/0)       |
| [114.二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)                                      | [top][前序][遍历]                  | 给定一个二叉树，原地将它展开为链表。                                       | [JavaScript](./114.二叉树展开为链表.js)               | Medium(1/0)       |
| [105.从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [top][前序]                        | 根据前序中序重新建树。                                                     | [JavaScript](./105.从前序与中序遍历序列构造二叉树.js) | Medium(1/0)       |
| [102.二叉树的层次遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)                                       | [top][层序]                        | 二叉树层序遍历。                                                           | [JavaScript](./102.二叉树的层次遍历.js)               | Medium(1/0)       |
| [230.二叉搜索树中第 K 小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)                                  | [2020-03-05 微信面试题][中序][BST] | 给定一个二叉搜索树，查找其中第 k 个最小的元素。                            | [JavaScript](./230.二叉搜索树中第K小的元素.js)        | Medium(1/0)       |
| [236.二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)                             | [top][后序][:star2:]               | 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。                     | [JavaScript](./236.二叉树的最近公共祖先.js)           | Medium(0/1)       |
| [98.验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)                                                | [top][中序][BST][:star2:]          | 给定一个二叉树，判断其是否是一个有效的二叉搜索树。                         | [JavaScript](./98.验证二叉搜索树.js)                  | Medium(0/1)       |
| [124.二叉树中的最大路径和](https://leetcode-cn.com/problems/validate-binary-search-tree/)                                         | [top][后序][最值]                  | 给定一个二叉树，判断其是否是一个有效的二叉搜索树。                         | [JavaScript](./124.二叉树中的最大路径和.js)           | Hard(1/0)         |
