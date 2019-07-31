// 第一个思路：分类数组
// function reOrderArray(array)
// {
//     const odds = [];
//     const evens = [];
//     for(let num of array) {
//         if(num % 2) {
//             odds.push(num);
//         } else {
//             evens.push(num);
//         }
//     }
//     odds.push(...evens);
//     return odds;
// }

// 第二个思路：要想保证原有次序，则只能顺次移动或相邻交换。
function reOrderArray(array) {
    for(let i = 0; i < array.length; i ++) {
        if(array[i] % 2 === 1) {
            continue;
        }
        // i 为偶数
        // 找到 i 后面第一个奇数
        let firstOddIndex = i + 1;
        while(firstOddIndex < array.length && array[firstOddIndex] % 2 === 0) {     
            firstOddIndex ++;
        }
        if(firstOddIndex >= array.length) {
            break;
        }
        // 腾位置
        let temp = array[firstOddIndex];
        for(let j = firstOddIndex; j > i; j --) {
            array[j] = array[j - 1];
        }
        array[i] = temp;
    }
    return array;
}

// reOrderArray([4, 2, 6, 1, 3, 5, 8]);