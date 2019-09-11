/**
 * @param {number[][]} triangle
 * @return {number}
*/


// dp[row][col] = triangle[row][col]        // row = triangle.length - 1
// dp[row][col] = triangle[row][col] + Math.min(dp[row + 1][col], dp[row][col + 1]);    // other 

let minimumTotal = triangle => {
    if(triangle == null || triangle.length === 0) {
        return 0;
    }
    const dp = [...triangle[triangle.length - 1]];      // 初始化的值 = triangle 最后一排   // 空间压缩

    for(let i = triangle.length - 2; i >= 0; i --) {
        for(let j = 0; j < triangle[i].length; j ++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};

// minimumTotal([
//     [2],
//    [3,4],
//   [6,5,7],
//  [4,1,8,3]
// ]);