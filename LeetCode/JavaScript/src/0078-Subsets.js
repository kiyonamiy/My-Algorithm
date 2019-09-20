/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = (nums) => {
    if(nums == null || nums.length === 0) {
        return [];
    }
    const result = [];
    const tempList = [];

    const recursion = (startIndex) => {
        result.push([...tempList]);
        for(let i = startIndex; i < nums.length; i ++) {
            tempList.push(nums[i]);
            recursion(i + 1, tempList);
            tempList.pop();
        }
    }

    recursion(0);
    return result;
};

subsets([0, 1, 2]);

// 0
// 0, 1
// 0, 1, 2
// 0, 1     pop() 的结果，回到上一层递归 i = 2 回到上一层递归
// 0        pop() 的结果，
// 0, 2     i = 2

