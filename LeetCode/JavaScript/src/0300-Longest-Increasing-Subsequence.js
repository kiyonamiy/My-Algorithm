/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-09 16:07:04 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-09 16:16:24
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let lengthOfLIS = nums => {
    if(nums.length === 0) {
        return 0;
    }
    let maxLength = 1;
    let memo = [];
    memo[0] = 1;
    for(let i = 1; i < nums.length; i ++) {
        memo[i] = 1;
        for(let j = 0; j < i; j ++) {
            if(nums[j] < nums[i] && memo[j] + 1 > memo[i]) {
                memo[i] = memo[j] + 1;
            }
        }
        if(memo[i] > maxLength) {
            maxLength = memo[i];
        }
    }
    return maxLength;
};

lengthOfLIS([1,3,6,7,9,4,10,5,6]);