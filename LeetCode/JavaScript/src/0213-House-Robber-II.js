/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    if(nums == null || nums.length === 0) {
        return 0;
    }

    if(nums.length === 1) {
        return nums[0];
    }

    let dp;
    let result1 = 0, result2 = 0;

    // 取头，不取尾，算一次（就是 0198-House-Robber
    dp = [];
    dp[0] = nums[0];
    for(let i = 1; i < nums.length - 1; i ++) {
        dp[i] = Math.max(dp[i - 1], (i - 2 >= 0 ? nums[i] + dp[i - 2] : nums[i]));
    }
    result1 = dp[nums.length - 2];

    // 取尾，不取头，算一次（就是 0198-House-Robber
    dp = [];
    dp[nums.length - 1] = nums[nums.length - 1];
    for(let i = nums.length - 2; i > 0; i --) {
        dp[i] = Math.max(dp[i + 1], (i + 2 < nums.length ? nums[i] + dp[i + 2] : nums[i]));
    }
    result2 = dp[1];

    // 取二者最大
    return Math.max(result1, result2);
};

// rob([2,3,2]);
