/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = grid => {
    
    if(grid == null || grid.length === 0) {
        return 0;
    }

    const memo = [];
    for(let i = 0; i < grid.length; i ++) {
        memo[i] = [...grid[i]];
    }

    const ROW = grid.length, COL = grid[0].length;
    const recursion = (nowRow, nowCol) => {
        if(nowRow >= ROW || nowCol >= COL) {
            return Number.MAX_SAFE_INTEGER;
        }
        if(nowRow === ROW - 1 && nowCol === COL - 1) {
            return grid[nowRow][nowCol];
        }
        if(memo[nowRow][nowCol] > grid[nowRow][nowCol]) {
            return memo[nowRow][nowCol];
        }
        memo[nowRow][nowCol] += Math.min(recursion(nowRow + 1, nowCol), recursion(nowRow, nowCol + 1));
        return memo[nowRow][nowCol];
    }

    return recursion(0, 0);
};

// minPathSum([[1,3,1],[1,5,1],[4,2,1]]);