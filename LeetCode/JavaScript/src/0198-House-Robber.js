/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = nums => {
    if(nums.length === 0) {
        return 0;
    }
    // memo[i] 表示考虑抢劫 nums[0, i] 所能获得的最大收益
    let memo = new Array(nums.length);
    memo.fill(-1);
    memo[0] = nums[0];

    for(let i = 1; i < nums.length; i ++) {
        for(let j = i; j >= 0; j --) {
            memo[i] = Math.max(memo[i], nums[j] + (j - 2 >= 0 ? memo[j - 2] : 0));
        }
    }
    return memo[nums.length - 1];
};

rob([1,2,3,1]);