/**
 * @param {number} n
 * @return {number}
 */
let integerBreak = n => {
    let memo = [];
    memo[1] = 1;
    memo[2] = 1;
    memo[3] = 2;
    for(let i = 4; i <= n; i ++) {
        let maxVal = 0;
        for(let j = 1; j <= i - 1; j ++) {
            maxVal = Math.max(maxVal, Math.max(j * memo[i - j], j * (i - j)));
        }
        memo[i] = maxVal;
    }
    return memo[n];
};

    // let temp1 = j * memo[i - j];    // 分割 i - j
    // let temp2 = j * (i - j);        // 不分割 i - j
    // let temp = temp1 > temp2 ? temp1 : temp2;
    // if(temp > maxVal) {
    //     maxVal = temp;
    // }