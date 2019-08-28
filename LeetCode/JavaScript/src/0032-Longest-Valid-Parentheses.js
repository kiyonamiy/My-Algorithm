/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = s => {
    if(s.length <= 1) {
        return 0;
    }
    let curMax = 0;
    const memo = new Array(s.length);
    memo.fill(0);
    for(let i = 1; i < s.length; i ++) {
        if(s[i] === ')') {
            if(s[i - 1] === '(') {
                memo[i] = i - 2 >= 0 ? memo[i - 2] + 2 : 2;     // (())() => (()) + () 结果     memo[i - 2] 就是为了查看 (()) 的结果
                curMax = Math.max(curMax, memo[i]);

            } else {    // if s[i-1] == ')', combine the previous length.   ()(())
                if(i - memo[i - 1] - 1 >= 0 && s[i - memo[i - 1] - 1] === '(') {
                    memo[i] = memo[i - 1] + 2 + (i - memo[i - 1] - 2 >= 0 ? memo[i - memo[i - 1] - 2] : 0);     // memo[i - memo[i - 1] - 2] 就是为了查看 () 的结果（去掉中间所有匹配的，再往前进
                    curMax = Math.max(curMax, memo[i]);
                }
            }
        }
        //else if s[i] == '(', skip it, because longest[i] must be 0
    }
    return curMax;
};