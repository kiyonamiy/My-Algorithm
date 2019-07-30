// function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// }

// function preTree(root) {
//     if(root == null) {
//         return '';
//     }
//     return `${root.val}${preTree(root.left)}${preTree(root.right)}`;
// }

// function inTree(root) {
//     if(root == null) {
//         return '';
//     }
//     return `${inTree(root.left)}${root.val}${inTree(root.right)}`;
// }

// // function hasSubArray(array1, array2) {
// //     let cur = 0;
// //     while(cur < array1.length) {
// //         let flag = true;
// //         for(let i = 0; i < array2.length; i ++) {
// //             if(array1[cur + i] !== array2[i]) {
// //                 flag = false;
// //                 break;
// //             }
// //         }
// //         if(flag) {
// //             return true;
// //         } else {
// //             cur ++;
// //         }
// //     }
// //     return false;
// // }

// function HasSubtree(pRoot1, pRoot2)
// {
//     if(pRoot1 == null || pRoot2 == null) {
//         return false;
//     }

//     const preStr1 = preTree(pRoot1);
//     const preStr2 = preTree(pRoot2);

//     const inStr1 = inTree(pRoot1);
//     const inStr2 = inTree(pRoot2);

//     console.log(preStr1, preStr2);
//     console.log(inStr1, inStr2);

//     return preStr1.includes(preStr2) && inStr1.includes(inStr2);
// }


// let root1 = new TreeNode(8);
// root1.left = new TreeNode(8);
// root1.left.left = new TreeNode(9);
// root1.left.right = new TreeNode(2);
// root1.left.right.left = new TreeNode(4);
// root1.left.right.right = new TreeNode(7);
// root1.right = new TreeNode(7);

// let root2 = new TreeNode(8);
// root2.left = new TreeNode(9);
// root2.right = new TreeNode(2);

// console.log(HasSubtree(root1, root2));

// 判断 pRoot2 是不是被包含在 此时开始的根节点
const isSubtree = (pRoot1, pRoot2) => {
    if(pRoot2 == null) {        // 两条判断顺序不随意 先 判断 pRoot2 为空的情况 就不需要判断 二者同为空的情况
        return true;
    }
    if(pRoot1 == null) {
        return false;
    }

    if(pRoot1.val === pRoot2.val) {
        return isSubtree(pRoot1.left, pRoot2.left) && isSubtree(pRoot1.right, pRoot2.right);
    } else {
        return false;
    }
}

function HasSubtree(pRoot1, pRoot2) {
    if(pRoot1 == null || pRoot2 == null) {
        return false;
    }
    return  isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);       // 关键呀 如果不在此时根节点 那就去子树里比较
}