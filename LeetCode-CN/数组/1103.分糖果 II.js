/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, numPeople) {
  const result = new Array(numPeople).fill(0);

  let index = 0;
  while (candies >= index + 1) {
    // 糖果=累计下标+1
    result[index % numPeople] += index + 1; // 通过 index % numPeople 循环遍历
    candies -= index + 1;
    index++;
  }
  result[index % numPeople] += candies;
  return result;
};
