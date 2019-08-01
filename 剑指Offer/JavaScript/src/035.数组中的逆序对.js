/*
 * @Author: KiyonamiYu 
 * @Date: 2019-08-01 15:12:27 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-08-01 23:59:13
 */
// 暴力
// function InversePairs(data)
// {
//     if(data.length === 0) {
//         return 0;
//     }
//     let count = 0;
//     for(let i = data.length - 1; i > 0; i --) {
//         for(let j = i - 1; j >= 0; j --) {
//             if(data[j] >= data[i]) {
//                 count ++;
//             }
//         }
//     }
//     return count % 1000000007;
// }

function InversePairs(data) {
    if(data.length === 0) {
        return 0;
    }

    // !!!每次递归，都先想到递归到底，再折回来一次，继续写代码
    const recursion = (start, end) => {
        // 该次递归 merge 结果保存
        const ancillaryArray = new Array(end - start + 1);      // 开辟辅助的新空间，底下排列使用   
        if(start === end) {
            ancillaryArray[0] = data[start];
            return { count: 0, data: ancillaryArray };
        }

        const halfLen = parseInt((end - start) / 2);
        // 递归拿到左右区间结果
        const leftResult = recursion(start, start + halfLen);
        const rightResult = recursion(start + halfLen + 1, end);
        // 拿到前面左右区间的结果 排序合成一个结果
        let p1 = leftResult.data.length - 1, p2 = rightResult.data.length - 1;    // [0, data.length - 1]
        let ancillaryIndex = ancillaryArray.length - 1;                           
        let count = 0;
        while(p1 >= 0 && p2 >= 0) {
            if(leftResult.data[p1] > rightResult.data[p2]) {
                ancillaryArray[ancillaryIndex --] = leftResult.data[p1 --];
                count += p2 - 0 + 1;                                            // 例如 57 46，7 比 6 大，说明 7 比 46 都大，直接加 2 即可（排序后比较末尾，末尾即大值）// 如果不排序的话，就无法*这样*计算前面比后面大的有几个，而是又要遍历了。
            } else {
                ancillaryArray[ancillaryIndex --] = rightResult.data[p2 --];
            }
        }
        while(p1 >= 0) {
            ancillaryArray[ancillaryIndex --] = leftResult.data[p1 --];
        }
        while(p2 >= 0) {
            ancillaryArray[ancillaryIndex --] = rightResult.data[p2 --];
        }
        // console.log("[start, end]", start, end);
        // console.log("leftResult", leftResult.data.toLocaleString());
        // console.log("rightResult", rightResult.data.toLocaleString());
        // console.log("ancillaryArray", ancillaryArray.toLocaleString());
        return { count: leftResult.count + rightResult.count + count, data: ancillaryArray };
    }

    const result = recursion(0, data.length - 1);
    return result.count % 1000000007;
}

// console.log(InversePairs([7,5,6,4]));
// console.log(InversePairs([1,2,3,4,5,6,7,0]));