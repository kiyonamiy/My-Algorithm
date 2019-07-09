/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-09 16:25:52 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-09 16:38:48
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let wiggleMaxLength = nums => {
    if(nums.length === 0) {
        return 0;
    }
    let memo = [];
    memo[0] = 1;

    let maxLength = memo[0];

    let status = [];
    status[0] = 0;

    for(let i = 1; i < nums.length; i ++) {
        memo[i] = 1;
        status[i] = 0;
        for(let j = 0; j < i; j ++) {
            if(nums[j] < nums[i] && status[j] <= 0) {
                memo[i] = Math.max(memo[i], memo[j] + 1);
                status[i] = 1;
            }
            if(nums[j] > nums[i] && status[j] >= 0) {
                memo[i] = Math.max(memo[i], memo[j] + 1);
                status[i] = -1;
            }
        }
        if(memo[i] > maxLength) {
            maxLength = memo[i];
        }
    }
    return maxLength;
};

wiggleMaxLength([1,7,4,9,2,5]);