// XOR 异或相同的数，结果为 0       （不同位得1，相同位得0（异或 0 的结果为本身!!!

// 都是做过一道题，数组中，一个数出现一次，其余出现两次。这道题的解法是，将所有数都异或，最后的结果为 只出现一次的数。（因为异或相同的数结果为 0，被抵消）
// 而这道题中间出现两个数只出现一次，全部异或的结果肯定不对。所以我们可以选择拆分数组成两个数组，两个数组中各一个只出现的数。
// 那要怎么确定怎么分组呢？先全部异或，确定最初位不同（该位 1），所以只要按着这个分类标准，分成两类（相同的数随意去哪一组，只要保证这两个数分开即可）
// 分类后，每个数组就符合一个数出现一次，其余出现两次。

// 这道题的时间复杂度并没有什么特别，相反，遍历了两次。但是并没有开辟额外的空间。
// 可以用统计法，先开空间计数，最后遍历结果。时间复杂度相似，就是多开辟了空间。（但是内部 set 之类恐怕时间复杂度会高

function FindNumsAppearOnce(array) {
    if(array.length < 2) {
        return;
    }
    // 为分组做准备
    let twoNumbersXOR = 0;
    for(let i = 0; i < array.length; i ++) {
        twoNumbersXOR ^= array[i];
    }
    if(twoNumbersXOR === 0) {
        return;
    }
    // 判断是第几位不同，以此分类（肯定有一位是 1，为 0 的时候就继续找
    let indexOf1 = 0;
    while((twoNumbersXOR & 1) === 0) {          // 注意运算符的优先级 !!! 不加括号会先运算 === ，再 &，错误
        twoNumbersXOR = (twoNumbersXOR >> 1);
        indexOf1 ++;
    }

    let num1 = 0, num2 = 0;
    for(let i = 0; i < array.length; i ++) {
        if(((array[i] >> indexOf1) & 1) === 0) {        // 分类
            num1 ^= array[i];
        } else {
            num2 ^= array[i];
        }
    }
    return [num1, num2];
}

console.log(FindNumsAppearOnce([2,4,3,6,3,2,5,5]));