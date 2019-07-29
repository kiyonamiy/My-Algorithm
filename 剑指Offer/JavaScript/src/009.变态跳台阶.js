function jumpFloorII(number) {
    let memo = [];
    memo[0] = 1, memo[1] = 1;
    for(let i = 2; i <= number; i ++) {
        memo[i] = 0;
        for(let j = 1; j <= i; j ++) {      // 永远只想着最后一步 j 和 前面状态 memo[i - j]
            memo[i] += memo[i - j];
        }
    }
    return memo[number];
}