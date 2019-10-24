/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = (arr) => {
    for(let i = 1; i < arr.length; i ++) {
        if(arr[i - 1] === 0) {
            for(let j = arr.length - 1; j > i; j --) {
                arr[j] = arr[j - 1];
            }
            arr[i] = 0;
        }
    }
};