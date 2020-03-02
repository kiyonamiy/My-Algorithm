/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// https://leetcode-cn.com/problems/edit-distance/solution/zi-di-xiang-shang-he-zi-ding-xiang-xia-by-powcai-3/
// dp[i][j] 表示（word1 前 i 个字符）变成（word2 前 j 个字符）花费的最少步数。
// 例如 word1='horse', word2='ros'，dp[4][2] 表示（horse 前 4 个字符 hors）变成（ros 前 2 个字符 ro）所需要花费的最少步数。
// 下面例子中
// dp[i][j] = dp[5][3]，即求最后一步
// dp[i - 1][j - 1] = dp[4][2]，即已知 hors 变为 ro 的最少步数
// dp[i - 1][j - 1] + 1 即在 hors 变为 ro 的情况下，即当前word1=roe的情况下，只需要将最后的e*替换成*s，就能变成ros。
// dp[i - 1][j] = dp[4][3]，即已知 hors 变为 ros 的最少步数
// dp[i - 1][j] + 1 即在hors 变成 ros 的情况下，即当前word1=rose的情况下，只需要将最后的e*删除掉*，就能变成ros。
// dp[i][j - 1] = dp[5][2]，即已知 horse 变为 ro 的最少步数
// dp[i][j - 1] + 1 即在 horse 变成 ro 的情况下，即当前word1=ro的情况下，只需要再*插入*一个s，就能变成ros。

// 当 word1[i] === word1[j]，dp[i][j] = dp[i - 1][j - 1]
// 即不需要任何变化，ij继续自加即可。
// 当 word1[i] !== word2[j]，dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1

var minDistance = function(word1, word2) {
  const dp = [];

  // 参考上述链接题解的图
  // 初始列
  for (let i = 0; i <= word1.length; i++) {
    dp.push([]);
    dp[i][0] = i;
  }
  // 初始行
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      // 此时只有 dp[0] 满长度，不能写 dp[i]
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};
