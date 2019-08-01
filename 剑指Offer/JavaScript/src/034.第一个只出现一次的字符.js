/*
 * @Author: KiyonamiYu 
 * @Date: 2019-08-01 14:31:08 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-08-01 14:57:07
 */
function FirstNotRepeatingChar(str) {
    const hashTime = new Array(256);
    hashTime.fill(0);
    for(let i = 0; i < str.length; i ++) {
        hashTime[str[i].charCodeAt()] ++;
    }
    for(let i = 0; i < str.length; i ++) {
        if(hashTime[str[i].charCodeAt()] === 1) {
            return i;
        }
    }
    return -1;
}

FirstNotRepeatingChar('google');