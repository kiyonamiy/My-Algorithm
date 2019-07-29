function rectCover(number)
{
    let memo = [];
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;
    for(let i = 3; i <= number; i ++) {
        memo[i] = memo[i - 1] + memo[i - 2];        // 只关心最后一块是横着放还是竖着放！
    }
    return memo[number];
}