/**
 * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
 */

 //s, pattern都是字符串
function match(str, pattern)
{
    if(str == null || pattern == null) {
        return false;
    }
    const matchCore = (strIndex, patternIndex) => {
        // 有效性检验：str到尾，pattern到尾，匹配成功
        if(strIndex === str.length && patternIndex === pattern.length) {
            return true;
        }
        // pattern先到尾，匹配失败
        if(strIndex !== str.length && patternIndex === pattern.length) {
            return false;
        }
        // 模式第2个是*，且字符串第1个跟模式第1个匹配,分3种匹配模式；模拟所有匹配的可能
        if(patternIndex + 1 < pattern.length && pattern[patternIndex + 1] === '*') {
            if(strIndex !== str.length && (pattern[patternIndex] === str[strIndex] || pattern[patternIndex] === '.')) {
                return matchCore(strIndex, patternIndex + 2)        // 模式后移2，视为x*匹配0个字符
                    || matchCore(strIndex + 1, patternIndex + 2)    // 视为模式匹配1个字符    
                    || matchCore(strIndex + 1, patternIndex);       // 匹配1个，再匹配str中的下一个
            } else {
                return matchCore(strIndex, patternIndex + 2);       // 如不匹配，模式后移2位
            }
        }
        //模式第2个不是*，且字符串第1个跟模式第1个匹配，则都后移1位，否则直接返回false
        if(strIndex !== str.length && (pattern[patternIndex] === str[strIndex] || pattern[patternIndex] === '.')) {
            return matchCore(strIndex + 1, patternIndex + 1);
        }
        return false;
    }
    return matchCore(0, 0);
}

match('a', '.');