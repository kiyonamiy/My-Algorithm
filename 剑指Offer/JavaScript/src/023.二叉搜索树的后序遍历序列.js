/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-30 14:34:58 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-30 14:42:12
 */

// 可以先自己画一颗二叉搜索树，再写出其后序遍历的结果。
// 可以发现，数列最后一位是根节点，前半部分是左子树都比根节点小，后半部分是右子树都比根节点大。
// 递归检查每一个二叉子树是否符合。

function VerifySquenceOfBST(sequence) {
    if(sequence.length === 0) {
        return false;
    }

    const recursion = (left, right) => {
        if(left > right) {
            return true;
        }
        const root = sequence[right];
        let smallEndIndex = right - 1;
        while(smallEndIndex >= left && sequence[smallEndIndex] >= root) {
            smallEndIndex --;
        }
        // 此时 smallEndIndex 小于 root
        // 检查前排是否还有不满足都比根节点小的条件的节点
        if(smallEndIndex >= left) {
            for(let i = left; i <= smallEndIndex; i ++) {
                if(sequence[i] >= root) {
                    return false;
                }
            }
        }
        return recursion(left, smallEndIndex) && recursion(smallEndIndex + 1, right - 1);
    }

    return recursion(0, sequence.length - 1);
}