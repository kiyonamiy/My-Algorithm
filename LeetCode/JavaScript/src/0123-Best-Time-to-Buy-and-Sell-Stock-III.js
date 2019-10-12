/**
 * @param {number[]} prices
 * @return {number}
 */

// 比如说 dp[3][2][1] 的含义就是：今天是第三天，我现在手上持有着股票，至今最多进行 2 次交易。

// dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
//               max(   选择 rest  ,           选择 sell      )

// 解释：今天我没有持有股票，有两种可能：
// 要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
// 要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

// dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
//               max(   选择 rest  ,           选择 buy         )

// 解释：今天我持有着股票，有两种可能：
// 要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
// 要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。

// 作者：labuladong
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-lab/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var maxProfit = (prices) => {
    if(prices == null || prices.length === 0) {
        return 0;
    }

    const MAX_TRANSACTIONS = 2;

    const dp = [];
    
    for(let i = 0; i < prices.length; i ++) {
        if(dp[i] == null) {
            dp.push([]);
            for(let j = 0; j < MAX_TRANSACTIONS; j ++) {
                dp[i].push([]);
                dp[i][j][0] = 0;
                dp[i][j][1] = 0;
            }
        }
        for(let j = 0; j < MAX_TRANSACTIONS; j ++) {
        // for(let j = MAX_TRANSACTIONS - 1; j >= 0; j --) {
            if(i === 0) {
                dp[i][j][0] = 0;
                dp[i][j][1] = -prices[i];
                continue;
            }
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i - 1][j][1], (dp[i - 1][j - 1] ? dp[i - 1][j - 1][0] : 0) - prices[i]);   // 买入开始算一笔交易
        }
    }

    return dp[prices.length - 1][MAX_TRANSACTIONS - 1][0];
};