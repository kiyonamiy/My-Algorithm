/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = (m, n) => {

    const memo = [];
    for(let i = 0; i < m; i ++) {
        memo[i] = new Array(n);
        memo[i].fill(0);
    }

    const recursion = (nowRow, nowCol) => {
        if(nowRow >= m || nowCol >= n) {
            return 0;
        }

        if(nowRow === m - 1 && nowCol === n - 1) {
            return 1;
        }

        if(memo[nowRow][nowCol] > 0) {
            return memo[nowRow][nowCol];
        }

        memo[nowRow][nowCol] = recursion(nowRow + 1, nowCol) + recursion(nowRow, nowCol + 1);

        return memo[nowRow][nowCol];
    }
    
    return recursion(0, 0);

    // result = recursion(0, 0);
    // for(let m of memo) {
    //     console.log(m);
    // }
    // console.log(result);
    // return result;
};

// uniquePaths(10, 5);