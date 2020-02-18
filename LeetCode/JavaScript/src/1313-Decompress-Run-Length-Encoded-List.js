/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  if (nums == null || nums.length < 2) {
    return nums;
  }
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      result.push(nums[i + 1]);
    }
  }
  return result;
};
