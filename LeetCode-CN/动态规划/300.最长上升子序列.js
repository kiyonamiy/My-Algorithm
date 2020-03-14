/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[i] 表示以nums[i]结尾的最长上升子序列长度（dp[i] = Math.max(dp[0...i-1]) && nums[i] > nums[j]
var lengthOfLIS = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let result = 1;
  const dp = [];
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    result = Math.max(result, dp[i]);
  }

  console.log(dp);
  return result;
};
