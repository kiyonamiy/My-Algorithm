/**
 * @param {number} n
 * @return {number}
 */
var numTrees = (n) => {
    const dp = [];
    dp[0] = 0, dp[1] = 1, dp[2] = 2;
    for(let i = 3; i <= n; i ++) {
        // 比如 i = 5 的时候
        // 5 做 [1, 2, 3, 4] 整体 的 右下叶节点 或者 右上根节点 
        dp[i] = dp[i - 1] * 2;
        // 5 插在 [1, 2, 3, 4] 的中间   // [1, 2, 3, 4] 一定有序，拆出的两个部分一个作为 5 的左上根节点，一部分作为 5 的左下叶节点 !!!
        for(let j = 1; j <= i - 2; j ++) {      // md 居然这里写了 n - 2 ??? 每个都作为结尾呀
            dp[i] += dp[j] * dp[i - 1 - j];     // 还有这里 居然写 dp[n - 1 - j]
        }
    }
    return dp[n];
};

// console.log(numTrees(5));