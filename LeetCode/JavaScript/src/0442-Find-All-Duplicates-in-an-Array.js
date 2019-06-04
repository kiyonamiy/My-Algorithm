/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = nums => {
    let record = new Array(nums.length + 1);
    record.fill(0);
    let answer = [];
    for(let num of nums) {
        record[num] ++;
        if(record[num] > 1) {
            answer.push(num);
        }
    }
    return answer;
}