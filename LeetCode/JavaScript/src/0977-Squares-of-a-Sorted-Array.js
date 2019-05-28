/*
 * @Author: Kiyonami 
 * @Date: 2019-05-28 22:29:45 
 * @Last Modified by: Kiyonami
 * @Last Modified time: 2019-05-28 22:34:03
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = (A) => A.map((value) => Math.pow(value, 2)).sort((a, b) => a - b);
