/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-04 17:08:38 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-04 17:30:13
 */
/**
 * @param {number} n
 * @return {number[]}
 */
let grayCode = n => {
    let binaryGrayCode = n => {
    
        if(n === 0) {
            return ['0'];
        }
        if(n === 1) {
            return ['0', '1'];
        }
        // n >= 2
    
        const prevGrayCode = binaryGrayCode(n - 1);
    
        const maxLen = Math.pow(2, n);
        const curGrayCode = new Array(maxLen);
        console.log(curGrayCode);
        for(let i = 0; i < prevGrayCode.length; i ++) {
            curGrayCode[i] = `0${prevGrayCode[i]}`;
            curGrayCode[maxLen - 1 - i] = `1${prevGrayCode[i]}`;
        }
        return curGrayCode;
    };

    const curBinaryCode = binaryGrayCode(n);
    const result = [];
    for(let code of curBinaryCode) {
        result.push(parseInt(code, 2));
    }
    return result;
}