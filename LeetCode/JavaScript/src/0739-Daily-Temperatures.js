// /**
//  * @param {number[]} T
//  * @return {number[]}
//  */
// var dailyTemperatures = function(T) {
//     const result = [];
//     for(let i = 0; i < T.length; i ++) {
//         const nowT = T[i];
//         let flag = false;
//         for(let j = i + 1; j < T.length; j ++) {
//             if(T[j] > nowT) {
//                 result.push(j - i);
//                 flag = true;
//                 break;
//             }
//         }
//         if(!flag) {
//             result.push(0);
//         }
//     }
//     return result;
// };

/**
 * @param {number[]} T
 * @return {number[]}
 */

// 是不是只有当当前的结果只能在后面出现的时候，才使用栈
var dailyTemperatures = function(T) {
  const result = new Array(T.length).fill(0); // 没被赋值的，默认为0

  const stack = [];
  for (let i = 0; i < T.length; i++) {
    while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
      // 通过下标取当天温度
      const index = stack.pop(); // 取出原下标
      result[index] = i - index; // result 和 T 的天数一致
    }
    stack.push(i); // 存入的是下标，表示天数
  }
  return result;
};
