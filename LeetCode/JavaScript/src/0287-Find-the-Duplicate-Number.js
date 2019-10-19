/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = (nums) => {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 1; i ++) {
        if(nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};

// var findDuplicate = (nums) => {
//     let low = 1, high = nums.length - 1;
//     while(low <= high) {
//         const mid = low + parseInt((high - low) / 2);
        
//         let count = 0;
//         for(let num of nums) {
//             if(num <= mid) {
//                 count ++;
//             }
//         }

//         if(count <= mid) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return low;
// };