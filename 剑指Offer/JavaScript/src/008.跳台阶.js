function jumpFloor(number)
{
    let memo = [];
    memo[0] = 1, memo[1] = 1;
    for(let i = 2; i <= number; i ++) {
        memo[i] = memo[i - 2] + memo[i - 1];
    }
    return memo[number];
}