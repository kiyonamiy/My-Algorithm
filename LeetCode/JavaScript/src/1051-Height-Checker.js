/*
 * @Author: Kiyonami 
 * @Date: 2019-05-28 22:46:43 
 * @Last Modified by: Kiyonami
 * @Last Modified time: 2019-05-28 22:51:46
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = (heights) => {
    let sortArray = Array.from(heights).sort((a, b) => a - b);
    let count = 0;
    heights.forEach((value, index) => {
        if(value != sortArray[index]) {
            count ++;
        }
    });
    return count;
}