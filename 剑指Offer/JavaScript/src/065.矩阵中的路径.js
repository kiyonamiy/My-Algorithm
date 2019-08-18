function hasPath(matrix, rows, cols, path)
{
    const visited = new Array(matrix.length);
    visited.fill(0);

    const searchFromHere = (nowRow, nowCol, pathIndex) => {

        if(nowRow < 0 || nowRow >= rows || nowCol < 0 || nowCol >= cols) {
            return false;
        }

        const nowIndex = nowRow * cols + nowCol;

        if(visited[nowIndex]) {
            return false;
        }

        if(matrix[nowIndex] !== path[pathIndex]) {
            return false;
        }

        // 终止条件要及时{!!!}
        if(matrix[nowIndex] === path[pathIndex] && pathIndex >= path.length - 1) {
            return true;
        }

        visited[nowIndex] = 1;

        const result = searchFromHere(nowRow + 1, nowCol, pathIndex + 1) || searchFromHere(nowRow - 1, nowCol, pathIndex + 1) || searchFromHere(nowRow, nowCol + 1, pathIndex + 1) || searchFromHere(nowRow, nowCol - 1, pathIndex + 1);

        visited[nowIndex] = 0;

        return result;
    }

    for(let i = 0; i < matrix.length; i ++) {
        if(matrix[i] === path[0]) {
            if(searchFromHere(parseInt(i / cols), i % cols, 0)) {
                return true;
            }
        }
    }
    return false;
}

// const matrix = "ABCDEFGHI";
// const rows = 3;
// const cols = 3;
// const path = "BEFG";
// console.log(hasPath(matrix, rows, cols, path));