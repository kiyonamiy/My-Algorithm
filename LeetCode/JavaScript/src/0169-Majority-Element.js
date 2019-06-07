/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = nums => {
    let record = new Map();
    for(let num of nums) {
        if(!record.has(num)) {
            record.set(num, 1);
        } else {
            record.set(num, record.get(num) + 1);
        }
        if(record.get(num) >= nums.length / 2) {
            return num;
        }
    }
};