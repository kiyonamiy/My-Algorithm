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
var buildTree = (preorder, inorder) => {
    if(preorder == null || inorder == null || preorder.length !== inorder.length) {
        return null;
    }
    const recursion = (preArray, inArray) => {
        if(preArray.length === 0 || inArray.length === 0) {
            return null;
        }

        const root = new TreeNode(preArray[0]);

        let inIndex = 0;
        while(inArray[inIndex] != root.val) {
            inIndex ++;
        }
        const leftInArray = inArray.filter((item, index) => (index < inIndex));
        const rightInArray = inArray.filter((item, index) => (index > inIndex));

        const leftPreArray = [];
        for(let i = 1; i < 1 + leftInArray.length; i ++) {
            leftPreArray.push(preArray[i]);
        }
        const rightPreArray = [];
        for(let i = 1 + leftInArray.length; i < preArray.length; i ++) {
            rightPreArray.push(preArray[i]);
        }

        root.left = recursion(leftPreArray, leftInArray);
        root.right = recursion(rightPreArray, rightInArray);

        return root;
    }

    return recursion(preorder, inorder);
};