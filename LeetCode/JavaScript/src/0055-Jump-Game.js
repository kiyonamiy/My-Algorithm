/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  // Time Limit Exceeded => 使用记忆数组剪枝
// var canJump = nums => {
//     if(nums == null || nums.length <= 1) {
//         return true;
//     }

//     const memo = new Array(nums.length);
//     memo.fill(-1);       // -1 代表没访问过，0 代表从这个点开始无法到达终点。

//     const recursion = startIndex => {
//         if(startIndex >= nums.length - 1) {
//             return true;
//         }
//         for(let i = 1; i <= nums[startIndex]; i ++) {
//             if(memo[startIndex + i] === 0) {
//                 continue;
//             }
//             if(recursion(startIndex + i)) {
//                 return true;
//             }
//         }
//         memo[startIndex] = 0;
//         return false;
//     }
//     return recursion(0);
// };

var canJump = nums => {
    if(nums == null || nums.length <= 1) {
        return true;
    }
    let maxIndex = 0 + nums[0];
    for(let i = 1; i < nums.length && i <= maxIndex; i ++) {
        maxIndex = Math.max(maxIndex, i + nums[i]);
    }
    return maxIndex >= nums.length - 1;
}