// 一开始使用的方式是队列取出，首先是 1，取出 *2，*3，*5，再放回去。
// 但是这样是无法保证数列从小到大的，比如1，取出放入2，3，5，再2取出，放入4，6，10，看到这里就有问题了，4比5小，却排在5后面

// function GetUglyNumber_Solution(index) {
//     if(index < 7) {
//         return index;
//     }

//     const uglyNumbers = [1];
//     const queue2 = [2], queue3 = [3], queue5 = [5];
//     while(uglyNumbers.length < index) {
//         const qh2 = queue2[0];
//         const qh3 = queue3[0];
//         const qh5 =  queue5[0];
//         let nextUglyNum;
//         if(qh2 <= qh3 && qh2 <= qh5) {
//             nextUglyNum = queue2.shift();
//         } else if(qh3 <= qh2 && qh3 <= qh5) {
//             nextUglyNum = queue3.shift();
//         } else {
//             nextUglyNum = queue5.shift();
//         }
//         if(nextUglyNum !== uglyNumbers[uglyNumbers.length - 1]) {
//             uglyNumbers.push(nextUglyNum);
//             queue2.push(nextUglyNum * 2);
//             queue3.push(nextUglyNum * 3);
//             queue5.push(nextUglyNum * 5);
//         }
//     }
//     return uglyNumbers[uglyNumbers.length - 1];
// }

function GetUglyNumber_Solution(index) {
    if(index < 7) {
        return index;
    }
    const uglyNums = [];
    let qh2 = 0, qh3 = 0, qh5 = 0;
    let nextUglyNum = 1;

    uglyNums.push(nextUglyNum);
    while(uglyNums.length < index) {
        // 上面那种方法保存了计算结果，不需要每次都重复计算，这边是每次进来都会重复计算一遍。
        nextUglyNum = Math.min(Math.min(uglyNums[qh2] * 2, uglyNums[qh3] * 3), uglyNums[qh5] * 5);
        if(nextUglyNum === uglyNums[qh2] * 2) {
            qh2 ++;
        }
        if(nextUglyNum === uglyNums[qh3] * 3) {
            qh3 ++;
        }
        if(nextUglyNum === uglyNums[qh5] * 5) {
            qh5 ++;
        }
        uglyNums.push(nextUglyNum);
    }
    return uglyNums[uglyNums.length - 1];
}

GetUglyNumber_Solution(8);