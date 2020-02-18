/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const rowNum = grid.length;
  const colNum = grid[0].length;
  let result = 0;
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      if (grid[i][j] < 0) {
        result += colNum - 1 - j + 1;
        break;
      }
    }
  }
  return result;
};
