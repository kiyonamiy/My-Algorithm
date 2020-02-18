/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
  return nums.filter(item => item.toString().length % 2 === 0).length;
};
