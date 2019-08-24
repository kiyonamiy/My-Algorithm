/*
 * @Author: KiyonamiYu 
 * @Date: 2019-08-23 20:27:26 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-08-23 22:40:07
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = (s, wordDict) => {

    const flags = new Array(s.length + 1);
    flags.fill(false);
    flags[0] = true;        // [-∞, 0) => true

    for(let i = 1; i <= s.length; i ++) {
        for(let j = 0; j < i; j ++) {
            if(flags[j] && wordDict.includes(s.substring(j, i))) {      // [j, i)
                flags[i] = true;
                break;
            }
        }
    }

    return flags[flags.length - 1];
}
// var wordBreak = (s, wordDict) => {
//     const record = new Map();

//     for(let i = 0; i < wordDict.length; i ++) {
//         let startIndex = 0;
//         let indexOfResult = s.indexOf(wordDict[i]);
//         while(indexOfResult >= 0) {
//             if(record.get(indexOfResult) == null) {
//                 record.set(indexOfResult, []);
//             }
//             const array = record.get(indexOfResult);
//             if(array.length === 0 || array[array.length - 1] !== (indexOfResult + wordDict[i].length - 1)) {
//                 array.push(indexOfResult + wordDict[i].length - 1);
//             }
//             indexOfResult = s.indexOf(wordDict[i], startIndex ++);
//         }
//     }
    
//     // for(let [key, value] of record) {
//     //     console.log(key, value);
//     // }

//     const zeroRecord = record.get(0);
//     if(zeroRecord == null) {
//         return false;
//     }
//     record.delete(0);

//     let result = false;

//     const recursion = (startIndex) => {
//         if(startIndex == s.length) {
//             result = true;
//             return;
//         }

//         const endIndexs = record.get(startIndex);
//         if(endIndexs == null) {
//             return;
//         }

//         for(let i = 0; i < endIndexs.length; i ++) {
//             recursion(endIndexs[i] + 1);
//             if(result) {
//                 return;
//             }
//         }
//     }

//     for(let i = 0; i < zeroRecord.length; i ++) {
//         recursion(zeroRecord[i] + 1);
//         if(result) {
//             return true;
//         }
//     }
//     return false;

// };

const s = "leetcode", wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));