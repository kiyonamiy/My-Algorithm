# 树

## 心得

0. 基础：先不要考虑边界，先考虑拿到左右子树的递归结果，能否通过当前节点，完成题目要求。
1. 最终（优）解是通过根节点求出，可以考虑后序遍历。（把左右子树当作已知解，来求解根节点）。
1. 当左子树和右子树满足定义，但是并不能递推出最后结果。可以考虑拆分为（左右子树+根特判）。
1. 求解最值时，觉得最值在中间过程中求解出来，可以在全局设置一个变量，不断更新最值。

| 问题                                                                                                                              | 标签                      | 描述                                                                       | 题解                                                  | 难度（成功/失败） |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------- |
| [617.合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)                                                        | [top][后序][重构]         | 合并两颗二叉树（相同位置节点值相加）                                       | [JavaScript](./617.合并二叉树.js)                     | Easy(2/0)         |
| [226.翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)                                                            | [top][后序][重构]         | 左右翻转一颗二叉树。                                                       | [JavaScript](./226.翻转二叉树.js)                     | Easy(2/0)         |
| [104.二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)                                            | [top][后序][查询]         | 给定一个二叉树，找出其最大深度。                                           | [JavaScript](./104.二叉树的最大深度.js)               | Easy(2/0)         |
| [538.把二叉搜索树转换为累加树](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)                                    | [top][中序][查询]         | 转换成为累加树，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。 | [JavaScript](./538.把二叉搜索树转换为累加树.js)       | Easy(0/1)         |
| [101.对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)                                                                | [top][后序][查询]         | 给定一个二叉树，检查它是否是镜像对称的。                                   | [JavaScript](./101.对称二叉树.js)                     | Easy(1/0)         |
| [543.二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)                                                     | [top][后序][查询]         | 给定一棵二叉树，你需要计算它的直径长度。                                   | [JavaScript](./543.二叉树的直径.js)                   | Easy(1/0)         |
| [94.二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)                                            | [top][中序][遍历][太简单] | 给定一个二叉树，返回它的中序遍历。                                         | [JavaScript](./94.二叉树的中序遍历.js)                | Medium(1/0)       |
| [114.二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)                                      | [top][前序][遍历]         | 给定一个二叉树，原地将它展开为链表。                                       | [JavaScript](./114.二叉树展开为链表.js)               | Medium(1/0)       |
| [105.从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [top][后序]               | 根据前序中序重新建树。                                                     | [JavaScript](./105.从前序与中序遍历序列构造二叉树.js) | Medium(1/0)       |
