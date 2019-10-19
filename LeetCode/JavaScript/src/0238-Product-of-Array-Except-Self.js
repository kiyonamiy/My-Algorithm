/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = (nums) => {
    if(nums == null || nums.length === 0) {
        return;
    }

    const result = [];
    result[0] = 1;

    let leftResult = 1;
    for(let i = 1; i < nums.length; i ++) {
        leftResult *= nums[i - 1];
        result[i] = leftResult;
    }

    let rightResult = 1;
    for(let i = nums.length - 2; i >= 0; i --) {
        rightResult *= nums[i + 1];
        result[i] *= rightResult;
    }

    return result;
};