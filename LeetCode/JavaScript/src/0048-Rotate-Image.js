/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = matrix => {
    if(matrix == null || matrix.length === 0 || matrix[0] === null || matrix[0].length === 0) {
        return [];
    }

    const row = matrix.length;
    const col = matrix[0].length;

    let rowStart = 0, rowEnd = row - 1;
    let colStart = 0, colEnd = col - 1;

    while(rowStart < rowEnd && colStart < colEnd) {
        // init
        const tempArray = [];
        for(let i = rowEnd; i >= rowStart; i --) {
            tempArray.push(matrix[i][colStart]);
        }
        const junctions1 = matrix[rowStart][colEnd];                // 3
        const junctions2 = matrix[rowEnd][colEnd];                  // 9

        for(let i = colStart; i <= colEnd; i ++) {
            tempArray.push(matrix[rowStart][i]);
            matrix[rowStart][i] = tempArray.shift();
        }

        for(let i = rowStart; i <= rowEnd; i ++) {
            tempArray.push(matrix[i][colEnd]);
            matrix[i][colEnd] = tempArray.shift();
        }
        tempArray.shift(); tempArray.unshift(junctions1);     // 处理交界处 [1, 6, 9] 变成 [3, 6, 9]

        for(let i = colEnd; i >= colStart; i --) {
            tempArray.push(matrix[rowEnd][i]);
            matrix[rowEnd][i] = tempArray.shift();
        }
        tempArray.shift(); tempArray.unshift(junctions2);     // 处理交界处 [3, 8, 7] 变成 [9, 8, 7]

        for(let i = rowEnd; i >= rowStart; i --) {
            tempArray.push(matrix[i][colStart]);
            matrix[i][colStart] = tempArray.shift();
        }
        rowStart ++, rowEnd --;
        colStart ++, colEnd --;
    }

    return matrix;
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);