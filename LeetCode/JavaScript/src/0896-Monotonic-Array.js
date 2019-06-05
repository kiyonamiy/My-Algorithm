/*
 * @Author: Kiyonami 
 * @Date: 2019-06-05 16:30:45 
 * @Last Modified by: Kiyonami
 * @Last Modified time: 2019-06-05 17:16:12
 */
// var isMonotonic = nums => {
//     let increasing = null;
//     for(let i = 0; i < nums.length - 1; i ++) {
//         let diff = nums[i + 1] - nums[i];
//         if(increasing === null && diff != 0) {
//             increasing = diff > 0;
//         } else {
//             if(increasing && diff < 0 || !increasing && diff > 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

var isMonotonic = nums => {
    let increasing = true, decreasing = true;
    for(let i = 1; i < nums.length; i ++) {
        if(nums[i - 1] > nums[i]) {
            increasing = false;
        }
        if(nums[i - 1] < nums[i]) {
            decreasing = false;
        }
        //当同时排除了递增递减，那就不是单调数组
        if(!increasing && !decreasing) {
            return false;
        }
    }
    return true;
}