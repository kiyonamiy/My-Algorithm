/*
 * @Author: Kiyonami 
 * @Date: 2019-06-06 22:13:42 
 * @Last Modified by: Kiyonami
 * @Last Modified time: 2019-06-06 22:50:13
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = S => {
    let ans = "";
    let opened = 0;
    for(let c of S) {
        if(c === '(' && opened ++ > 0) {
            ans += c;
        }
        //即使执行到最外层 ) opened == 1 还是要 opened -- 归零
        if(c === ')' && opened -- > 1) {
            ans += c;
        }
    }
    return ans;
};

// if(c === '(') {
//     if(opened > 0) {
//         ans += c;
//     }
//     opened ++;
// }
// if(c === ')') {
//     if(opened > 1) {
//         ans += c;
//     }
//     opened --;
// }