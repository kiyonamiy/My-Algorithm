/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-06 19:47:05 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-06 20:45:08
 * 1h
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = matrix => {

    let result = [];

    while(matrix.length > 0) {

        let width = matrix[0].length;
        let height = matrix.length;

        result.push(...matrix[0]);

        for(let i = 1; i < height - 1; i ++) {
            if(matrix[i].length === 0) {
                continue;
            }
            result.push(matrix[i][width - 1]);
            matrix[i].pop();
        }

        if(matrix.length > 1) {
            result.push(...matrix[height - 1].reverse());
        }
        for(let i = height - 1 - 1; i > 0; i --) {
            if(matrix[i].length === 0) {
                continue;
            }
            result.push(matrix[i][0]);
            matrix[i].shift();
        }

        matrix.shift();
        matrix.pop();

    }


    return result;
};

spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]);