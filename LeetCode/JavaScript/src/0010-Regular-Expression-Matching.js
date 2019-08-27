/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = (str, pattern) => {
    if(str == null || pattern == null) {
        return false;
    }

    const matchCore = (strIndex, patternIndex) => {
        if(strIndex === str.length && patternIndex === pattern.length) {
            return true;
        }
        // pattern 先到尾，匹配失败
        if(strIndex < str.length && patternIndex === pattern.length) {
            return false;
        }

        // 为什么不写如下代码，这样递归的时候不用再在 if 中写 strIndex < str.length
        // 因为如果前面匹配，此时 strIndex 已经到底，而 pattern 最后几位如果是 a*b*c*d* ，还是匹配的。
        // if(strIndex === str.length && patternIndex < pattern.length) {
        //     return false;
        // }

        // 如果下一位是 * 号
        if(patternIndex + 1 < pattern.length && pattern[patternIndex + 1] === '*') {
            if(strIndex < str.length && (str[strIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
                return matchCore(strIndex, patternIndex + 2)         // 匹配 0 个，即使*号前匹配，但是我们还是可以选择不匹配该项，例如 aaa a*aaa 
                    || matchCore(strIndex + 1, patternIndex + 2)     // 匹配 1 个
                    || matchCore(strIndex + 1, patternIndex);        // 持续匹配
            } else {
                // * 号前一位就不匹配了，直接跳过
                return matchCore(strIndex, patternIndex + 2);       // aaa b*aaa
            }
        }

        if(strIndex < str.length && (str[strIndex] === pattern[patternIndex] || pattern[patternIndex] === '.')) {
            return matchCore(strIndex + 1, patternIndex + 1);
        }

        return false;
    }

    return matchCore(0, 0);
}