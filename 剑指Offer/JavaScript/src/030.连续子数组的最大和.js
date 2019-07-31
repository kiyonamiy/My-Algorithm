function FindGreatestSumOfSubArray(array)
{
    if(array.length === 0) {
        return 0;
    }
    // F(i)：以 array[i] 为末尾元素的子数组的和的最大值     // i 是一定要取到的
    const memo = [];
    memo[0] = array[0];

    let result = array[0];
    for(let i = 1; i < array.length; i ++) {
        memo[i] = Math.max(memo[i - 1] + array[i], array[i]);
        result = Math.max(result, memo[i]);
    }
    return result;
}