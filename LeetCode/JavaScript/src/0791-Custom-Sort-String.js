/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
//箭头函数快这么多？ 快了 12 ms ，从 75% 到 99%
// var customSortString = (S, T) => {
//     let result = "";
//     let record = new Map();
//     for(let s of S) {
//         record.set(s, 0);
//     }
    
//     for(let t of T) {
//         if(record.has(t)) {
//             record.set(t, record.get(t) + 1);
//         } else {
//             result += t;
//         }
//     }
//     for(let s of S) {
//         for(let i = 0; i < record.get(s); i ++) {
//             result += s;
//         }
//     }
//     return result;
// };

var customSortString = (S, T) => T.split('').sort((a, b)=>S.indexOf(a) - S.indexOf(b)).join('');