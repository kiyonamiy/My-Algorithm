/*
1. 对于序列化：使用前序遍历，递归的将二叉树的值转化为字符，并且在每次二叉树的结点不为空时，在转化val所得的字符之后添加一个','作为分割。对于空节点则以'#'代替。
2. 对于反序列化：按照前序顺序，递归的使用字符串中的字符创建一个二叉树
*/

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Serialize(root)
{
    if(root == null) {
        return '#,';
    }
    return `${root.val},${Serialize(root.left)}${Serialize(root.right)}`;
}

function Deserialize(s)
{
    if(s == null || s.length === 0) {
        return null;
    }
    let index = -1;
    const valArray = s.split(',');

    const recursion = () => {
        index ++;
        if(index < valArray.length && valArray[index] !== '#') {
            const treeNode = new TreeNode(parseInt(valArray[index]));
            treeNode.left = recursion();
            treeNode.right = recursion();
            return treeNode;
        } else {
            return null;
        }
    }

    return recursion();
}

// const treeNode1 = new TreeNode(1);
// const treeNode2 = new TreeNode(2);
// const treeNode3 = new TreeNode(3);

// treeNode1.left = treeNode2;
// treeNode1.right = treeNode3;

// console.log(Serialize(treeNode1));