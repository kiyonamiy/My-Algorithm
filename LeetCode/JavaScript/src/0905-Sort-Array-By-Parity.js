/*
 * @Author: Kiyonami 
 * @Date: 2019-05-27 18:58:43 
 * @Last Modified by: Kiyonami
 * @Last Modified time: 2019-05-27 19:23:30
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = A => {
    let left = 0, right = A.length - 1;
    while(left < right) {
        //防止 ++ -- 的过程中出现 left >= right 情况
        while(left < right && A[left] % 2 == 0) {
            left ++;
        }
        while(left < right && A[right] % 2 != 0) {
            right --;
        }

        [A[left ++], A[right --]] = [A[right], A[left]];
        //为下一次循环做准备，不然一直都是在这个位置上
    }
    return A;
};