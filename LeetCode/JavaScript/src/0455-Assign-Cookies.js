/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-09 17:29:58 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-09 17:32:39
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let findContentChildren = (g, s) => {
    s.sort((a, b) => {
        return a - b;
    });

    g.sort((a, b) => {
        return a - b;
    });

    let count = 0;
    let cookieIndex = 0;

    for(let i = 0; i < g.length; i ++) {
        while(cookieIndex < s.length) {
            if(s[cookieIndex ++] >= g[i]) {
                count ++;
                break;
            }
        }
    }
    return count;
};