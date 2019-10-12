/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (prices) => {
    if(prices == null || prices.length === 0) {
        return 0;
    }

    const dp = [];

    for(let i = 0; i < prices.length; i ++) {
        if(dp[i] == null) {
            dp.push([]);
            dp[i][0] = 0, dp[i][1] = 0;
        }
        if(i === 0) {
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            continue;
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[prices.length - 1][0];
};