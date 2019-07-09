/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-09 17:04:16 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-09 17:23:13
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // 转换为 01 背包的问题
let canPartition = nums => {
    if(nums.length === 0) {
        return true;
    }
    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    if(sum % 2 !== 0) {
        return false;
    }

    let halfSum = sum / 2;
    let memo = [];
    for(let j = 0; j <= halfSum; j ++) {
        memo[j] = (nums[0] == j);       // 能否填满
    }
    for(let i = 1; i < nums.length; i ++) {
        for(let j = halfSum; j >= nums[i]; j --) {
            memo[j] = memo[j] || memo[j - nums[i]];
        }
    }
    return memo[halfSum];
};