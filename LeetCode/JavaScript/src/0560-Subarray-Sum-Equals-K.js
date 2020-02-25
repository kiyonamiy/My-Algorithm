/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1); // sum 正好等于 k 的时候，累加+1。 result += map.get(sum - k);

  let sum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.get(sum - k)) {
      result += map.get(sum - k);
    }
    // 先判断之前的，后处理为下一次循环做准备
    if (!map.get(sum)) {
      map.set(sum, 0);
    }
    map.set(sum, map.get(sum) + 1);
  }
  return result;
};
