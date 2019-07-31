const Permutation = str => {

    const result = [];

    if(str === '') {
        return result;
    }

    const strArray = str.split('');   

    // 交换函数定义
    const swap = (a, b) => {
        let temp = strArray[a];
        strArray[a] = strArray[b];
        strArray[b] = temp;
    }

    const record = new Set();
    // 递归函数定义
    const recursion = startIndex => {
        if(startIndex === strArray.length - 1) {
            const fixedStr = strArray.join('');
            if(!record.has(fixedStr)) {
                record.add(fixedStr);
                result.push(fixedStr);
            }
            return;
        }
        // 把字符串分为两部分：一部分是字符串的第一个字符；另一部分是第一个字符以后的所有字符。
        for(let i = startIndex; i < strArray.length; i ++) {
            swap(startIndex, i);    // 把每个子串的字符都做到移到第一位的可能
            recursion(startIndex + 1);
            swap(startIndex, i);    // 换回来，才能在最初的状态遍历，按顺序使每个字母都能第一个
        }
    }
    recursion(0);
    return result.sort();
}

// 拿 abc 举例
// 首先递归到尾 startIndex = 2 => abc
// 回退一格，即 startIndex = 1 的时候，此时 i = startIndex = 1，刚经历完 recursion(startIndex + 1 = 2); 交换回来（二者相同，没有变化），
    // 进行下一轮 for 循环，此时 i = 2；swap(1, 2)，数组就变成了acb；再次递归 recursion(startIndex + 1 = 2)（还是 2 ）；这次递归直接结束 2 === strArray.length - 1
    // 再从递归中退回来，再swap换回来，又变成了 abc
    // 此时该循环也结束了，那要再回退一格
// startIndex = 0 的时候，交换