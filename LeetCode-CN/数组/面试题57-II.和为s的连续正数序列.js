/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let start = 1,
    end = 1; // [start, end)

  let sum = 0;
  const result = [];
  // start 来确定结尾
  while (start <= target / 2) {
    if (sum < target) {
      sum += end;
      end++;
    } else if (sum > target) {
      sum -= start;
      start++;
    } else {
      const array = [];
      for (let i = start; i < end; i++) {
        array.push(i);
      }
      result.push(array);
      sum -= start;
      start++;
    }
  }
  return result;
};
