/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (k, prices) => {
    if(k <= 0 || prices == null || prices.length === 0) {
        return 0;
    }

    const dp = [];

    for(let i = 0; i < prices.length; i ++) {
        if(dp[i] == null) {
            dp.push([]);
            for(let j = 0; j < k; j ++) {
                dp[i].push([]);
                dp[i][j][0] = 0;
                dp[i][j][1] = 0;
            }
        }
        for(let j = 0; j < k; j ++) {
            if(i === 0) {
                dp[0][j][0] = 0;
                dp[0][j][1] = -prices[0];
                continue;
            }
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i - 1][j][1], (dp[i - 1][j - 1] != null ? dp[i - 1][j - 1][0] : 0) - prices[i]);
        }
    }

    return dp[prices.length - 1][k - 1][0];
};