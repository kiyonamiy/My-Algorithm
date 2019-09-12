/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */


// dp[row][col] = 1     // row = obstacleGrid.length - 1; col = obstacleGrid[0].length - 1
// dp[row][col] = dp[row + 1][col] + dp[row][col + 1]       // row + 1 <= obstacleGrid.length - 1; col + 1 <= obstacleGrid[0].length - 1; obstacleGrid[row + 1][col] != 1 && obstacleGrid[row][col + 1] != 1
// var uniquePathsWithObstacles = obstacleGrid => {
//     if(obstacleGrid == null || obstacleGrid.length === 0 || obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) {
//         return 0;
//     }

//     const ROW = obstacleGrid.length - 1, COL = obstacleGrid[0].length - 1;
//     const dp = [[]];
//     dp[0][0] = 1;
//     for(let i = 0; i <= ROW; i ++) {
//         for(let j = 0; j <= COL; j ++) {
//             if(i === 0 && j === 0) {
//                 continue;
//             }
//             const upOrigin = (i - 1 >= 0 && obstacleGrid[i - 1][j] !== 1) ? dp[i - 1][j] : 0;
//             const leftOrigin = (j - 1 >= 0 && obstacleGrid[i][j - 1] !== 1) ? dp[i][j - 1] : 0;
//             dp[i][j] = upOrigin + leftOrigin;
//         }
//         dp.push([]);
//     }
//     return dp[ROW][COL];
// };

var uniquePathsWithObstacles = obstacleGrid => {
    // if(obstacleGrid == null || obstacleGrid.length === 0 
    //     || obstacleGrid[0] == null || obstacleGrid[0].length === 0
    //     || obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) {
    //     return 0;
    // }
    const ROW = obstacleGrid.length - 1, COL = obstacleGrid[0].length - 1;
    const dp = new Array(COL + 1);
    dp.fill(0);
    dp[0] = 1;
    for(let i = 0; i <= ROW; i ++) {
        for(let j = 0; j <= COL; j ++) {
            if(obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if(j - 1 < 0) {
                continue;
            }
            dp[j] += dp[j - 1];
        }
    }
    return dp[COL];
};

uniquePathsWithObstacles([[0, 1]]);