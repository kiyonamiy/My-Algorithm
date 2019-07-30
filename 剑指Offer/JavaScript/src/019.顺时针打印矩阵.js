function printMatrix(matrix) 
{
    const row = matrix.length;
    const col = matrix[0].length;

    const result = [];

    if(row == 0 || col == 0) {
        return result;
    }

    let left = 0, right = col - 1, top = 0, bottom = row - 1;
    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i ++) {
            result.push(matrix[top][i]);
        }
        for(let i = top + 1; i <= bottom; i ++) {
            result.push(matrix[i][right]);
        }
        // 防止出现单行
        if(top != bottom) {
            for(let i = right - 1; i >= left; i --) {
                result.push(matrix[bottom][i]);
            }
        }
        // 防止出现单列
        if(left != right) {
            for(let i = bottom - 1; i >= top + 1; i --) {
                result.push(matrix[i][left]);
            }
        }
        left ++, right --, top ++, bottom --;
    }
    return result;
}