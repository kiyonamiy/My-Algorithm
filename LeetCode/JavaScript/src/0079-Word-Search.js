/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = (board, word) => {
    if(board == null || board.length === 0) {
        return false;
    }
    const visited = [];
    for(let i = 0; i < board.length; i ++) {
        visited[i] = [];
    }

    const recursion = (row, col, index) => {
        if(index >= word.length) {      // 忘记考虑
            return true;
        }
        if(row >= board.length || row < 0) {
            return false;
        }
        if(col >= board[0].length || col < 0) {
            return false;
        }
        if(visited[row][col]) {
            return false;
        }
        if(board[row][col] !== word[index]) {
            return false;
        } else {
            visited[row][col] = true;
            const result = recursion(row + 1, col, index + 1) || recursion(row - 1, col, index + 1) || recursion(row, col + 1, index + 1) || recursion(row, col - 1, index + 1);
            visited[row][col] = false;
            return result;
        }
    }

    for(let i = 0; i < board.length; i ++) {
        for(let j = 0; j < board[i].length; j ++) {
            if(recursion(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED");