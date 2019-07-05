/**
 * @param {string} s
 * @return {boolean}
 */
let repeatedSubstringPattern = s => {
    let reg = /^(\w+)\1+$/      // ^$头尾加紧 重复出现 \1+一次以上 (\w+)该单词
    return reg.test(s);
};