import java.util.List;

/**
 * @author KiyonamiYu
 * @date 2019/5/17 15:05
 */
public class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null) {
            return null;
        }

        if(root.val < key) {
            root.right = deleteNode(root.right, key);
        } else if(root.val > key) {
            root.left = deleteNode(root.left, key);
        } else {    //root.val == key
            if(root.left == null) {
                return root.right;  //返回替root的位置，做子树（第27行最后会执行到此，因为右子树的最小值 findMin 无左节点（可能还是有右节点
            }
            if(root.right == null) {
                return root.left;
            }
            //左右子树都不为空的情况
            TreeNode rightMinNode = findMin(root.right);
            root.val = rightMinNode.val;    //直接赋值即可！相当于把root删除，此时有两个节点的值为 rightMinNode.val
            root.right = deleteNode(root.right, rightMinNode.val);  //再把底下的重复节点删了
        }

        return root;
    }

    private TreeNode findMin(TreeNode root) {
        if(root == null) {
            return null;
        }

        if(root.left == null) {
            return root;
        }
        return findMin(root.left);
    }
}
