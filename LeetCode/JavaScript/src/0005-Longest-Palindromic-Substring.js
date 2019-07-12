// https://www.youtube.com/watch?v=TLaGwTnd3HY 有一定的参考价值，但是，是有 bug 的
// 例如 "abcda" 所有的 dp 值，都是 1，但是按照上述 if(s[0] === s[4]) => dp[0][4] = dp[1][3] + 2 = 3 没有考虑中间情况。
// 所以不是所有的都可以直接赋值，只有当 [i + 1][j - 1] 是回文串的时候，才 +2 。所以觉得需要另一个 bool 二维矩阵做判断。
/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = s => {
    if(s.length === 0) {
        return '';
    }

    let dp = [];
    for(let i = 0; i < s.length; i ++) {
        dp[i] = [];
        dp[i][i] = s[i];
    }

    let result = dp[0][0];
    for(let subLen = 2; subLen <= s.length; subLen ++) {                // 不断增加试探长度                       
        for(let i = 0, j = i + subLen - 1; j < s.length; i ++, j ++) {  // i j 保持 subLen 间隙，同时前进试探
            if(s[i] === s[j] && subLen === 2) {                         // 保证 j 一直大于 i 形成字串，符合定义（注意底下 dp[i + 1][j - 1] 当 i = 0 j = 1 的情况
                dp[i][j] = `${s[i]}${s[j]}`;
            } else if(s[i] === s[j] && dp[i + 1][j - 1] != null) {      // 前提是 子串 [i + 1][j - 1] 也是回文串，其他情况不做操作
                dp[i][j] = `${s[i]}${dp[i + 1][j - 1]}${s[j]}`;
            }
            if(dp[i][j] != null && dp[i][j].length > result.length) {   // 最长
                result = dp[i][j];
            }
        }
    }
    return result;
};

const babad = "babad";
const test2 = "abcda";
const test3 = "cbbd";

longestPalindrome(babad);