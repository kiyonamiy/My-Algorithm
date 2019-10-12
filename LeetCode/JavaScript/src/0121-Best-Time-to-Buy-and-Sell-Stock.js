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
        dp.push([]);
        dp[i].push([]); dp[i].push([]);
    }

    for(let i = 0; i < dp.length; i ++) {
        if(i - 1=== -1) {
            dp[i][0] = 0;
            // 解释：
            //   dp[i][0] 
            // = max(dp[-1][0], dp[-1][1] + prices[i])
            // = max(0, -infinity + prices[i]) = 0
            dp[i][1] = -prices[i];
            //解释：
            //   dp[i][1] 
            // = max(dp[-1][1], dp[-1][0] - prices[i])
            // = max(-infinity, 0 - prices[i]) 
            // = -prices[i]
            continue;
        }
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);   
    }

    return dp[prices.length - 1][0];
};