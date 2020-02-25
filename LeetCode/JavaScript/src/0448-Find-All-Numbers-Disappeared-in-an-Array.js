/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     const arr = new Array(nums.length + 1);
//     nums.forEach((num) => {
//         arr[num] = true;
//     });
//     const result = [];
//     for(let i = 1; i < arr.length; i ++) {
//         if(arr[i] === undefined) {
//             result.push(i);
//         }
//     }
//     return result;
// };

var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};
