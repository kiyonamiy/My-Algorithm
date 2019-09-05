/*
 * @Author: KiyonamiYu 
 * @Date: 2019-09-05 19:57:27 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-09-05 20:25:18
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = nums => {
    if(nums == null || nums.length === 0) {
        return 0;
    }
    const dp = [];      // 计算数列中每一项的最大和
    dp[0] = nums[0];

    let maxSum = dp[0];
    for(let i = 1; i < nums.length; i ++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);  // + dp[i - 1] 表示和前几项（至少一项）相连；+ 0 表示另起炉灶
        maxSum = Math.max(maxSum, dp[i]);
    }
    
    return maxSum;
}
// let maxSubArray = (nums) => {
//     if(nums == null || nums.length === 0) {
//         return 0;
//     }
//     let left = 0, right = 0, sum = nums[0];
//     let maxSum = sum;
//     while(right + 1 < nums.length) {
//         right ++;
//         if(sum <= 0 && nums[right] > sum) {
//             left = right;
//             sum = nums[right];
//         } else {
//             sum += nums[right];
//         }
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum;
// };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));