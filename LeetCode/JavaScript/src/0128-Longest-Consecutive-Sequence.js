/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
    const record = new Map();

    let result = 0;
    for(let num of nums) {
        // 说明重复元素
        if(record.has(num)) {
            continue;
        }
        const leftLength = record.get(num - 1) || 0;
        const rightLength = record.get(num + 1) || 0;

        const sum = leftLength + rightLength + 1;

        result = Math.max(result, sum);

        record.set(num, sum);
        record.set(num - leftLength, sum);
        record.set(num + rightLength, sum);
    }

    return result;
};

// https://leetcode.com/problems/longest-consecutive-sequence/discuss/41055/My-really-simple-Java-O(n)-solution-Accepted
// key=数值 value=长度（一定是现在最长的（sum））
// longestConsecutive([4,0,-4,-2,2,5,2,0,-8,-8,-8,-8,-1,7,4,5,5,-4,6,6,-3]);

