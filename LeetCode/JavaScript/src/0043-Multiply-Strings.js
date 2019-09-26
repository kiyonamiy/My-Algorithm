/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = (num1, num2) => {
    const digits = new Array(num1.length + num2.length);      // digits 的位数最多为 二者位数之和
    digits.fill(0);

    for(let i = num2.length - 1; i >= 0; i --) {
        for(let j = num1.length - 1; j >= 0; j --) {
            const mul = parseInt(num1[j]) * parseInt(num2[i]);
            const pos1 = i + j, pos2 = i + j + 1;
            const sum = mul + digits[pos2];         // 加上上一次结果的十位（相当于前移动了一位
            digits[pos1] += parseInt(sum / 10);
            digits[pos2] = sum % 10;
        }
    }
    let result = "";
    // 排除前导0    // 因为 digits.fill(0);
    for(let digit of digits) {
        if(result.length === 0 && digit === 0) {
            continue;
        }
        result = `${result}${digit}`;
    }
    return result.length === 0 ? "0" : result;
}

// multiply("123", "45");

// function reverseNum(str) {
//     let reverseStr = "";
//     for(let i = str.length - 1; i >= 0; i --) {
//         reverseStr = `${reverseStr}${str[i]}`;
//     }
//     return reverseStr;
// }
// var multiply = (num1, num2) => {
//     const array = [];
//     for(let i = num2.length - 1; i >= 0; i --) {
//         let flag = 0;
//         let result = "";
//         for(let j = num1.length - 1; j >= 0; j --) {
//             let multiResult = Number.parseInt(num2[i]) * Number.parseInt(num1[j]) + flag;
//             const first = Number.parseInt(multiResult / 10);
//             const second = Number.parseInt(multiResult % 10);
//             flag = first;
//             result = `${second}${result}`;
//         }
//         if(flag > 0) {
//             result = `${flag}${result}`;
//         }

//         for(let j = 0; j < num2.length - 1 - i; j ++) {
//             result = `${result}0`;
//         }
//         array.push(result);
//     }
//     for(let k = 1; k < array.length; k ++) {
//         let num1 = array[k - 1];
//         let num2 = array[k];

//         num1 = reverseNum(num1);
//         num2 = reverseNum(num2);
//         console.log(num1, num2);

//         let flag = 0;
//         let result = "";
//         for(let i = 0; i < num2.length; i ++) {
//             let num1Flag = null;
//             if(i >= num1.length) {
//                 num1Flag = "0";
//             } else {
//                 num1Flag = num1[i];
//             }
//             let addResult = Number.parseInt(num2[i]) + Number.parseInt(num1Flag) + flag;
//             const first = Number.parseInt(addResult / 10);
//             const second = Number.parseInt(addResult % 10);
//             flag = first;
//             result = `${second}${result}`;
//         }
//         if(flag > 0) {
//             result = `${flag}${result}`;
//         }
//         array[k] = result;
//     }
//     // console.log(array[array.length - 1]);
//     if(Number.parseInt(array[array.length - 1]) === 0) {
//         return "0";
//     } else {
//         return array[array.length - 1];
//     }
// };

// multiply("123", "456");