/*
 * @Author: KiyonamiYu 
 * @Date: 2019-09-04 11:49:38 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-09-04 12:31:02
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// 给定一个无序数组，求其中缺少的最小的正整数（从 1  开始）。例如 [7,8,9,11,12]，缺少一堆，但是最小的是 1 。On O1
// 解法：将所有数字放在正确的位置上，比如 nums[0] 放 1 放其他的都是错误的。

var firstMissingPositive = nums => {
    for(let i = 0; i < nums.length; i ++) {
        while(nums[i] > 0 && nums[i] <= nums.length) {
            // 在正确位置 比如 [1, 2, 3, 4] nums[0] = 1
            if(nums[i] === i + 1) {
                break;
            }
            // 不在正确的位置情况
            const rightIndex = nums[i] - 1;     // 这个正数本应该被放置的位置
            if(nums[i] === nums[rightIndex]) {  // 防止 [1, 1] 第二个 1 rightIndex = 0 死循环
                break;
            }
            [nums[i], nums[rightIndex]] = [nums[rightIndex], nums[i]];
        }
    }
    // 第一个不在正确位置的 下标 +1 即为答案
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};

// firstMissingPositive([1,1]);