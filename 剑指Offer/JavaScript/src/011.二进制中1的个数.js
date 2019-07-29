/**
 * 正数：原码、补码、反码 都相同
 * 负数：原码（第一位是符号位1）、反码（原码符号位不变，其余各个位取反）、补码（反码+1）
 * @param {} n 
 */
function NumberOf1(n)
{
    let count = 0;
    if(n < 0) {
        n = n & 0x7FFFFFFF;    // 0x7FFFFFFF 二进制符号位为0 其余为1 。 （首先 n 是负数就是补码，补码符号位为 1，所以只是为了去掉符号位的 1 其余正常，此时 count 只统计了符号位
        count ++;
    }
    while(n != 0) {
        count += n & 1;
        n = n >> 1;
    }
    return count;
}