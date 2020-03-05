/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
  if (grid.length === 0) {
    return 0;
  }
  // 上下左右
  let stepX = [-1, 1, 0, 0];
  let stepY = [0, 0, -1, 1];

  let result = 0;
  let queue = [];

  // 寻找一开始就是烂了的橘子
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  while (queue.length > 0) {
    const nextQueue = [];
    while (queue.length > 0) {
      const nowPos = queue.shift();
      // 寻找下一个新鲜的橘子
      for (let i = 0; i < 4; i++) {
        const x = nowPos[0] + stepX[i];
        const y = nowPos[1] + stepY[i];
        if (
          x >= 0 &&
          y >= 0 &&
          x < grid.length &&
          y < grid[0].length &&
          grid[x][y] === 1
        ) {
          grid[x][y] = 2;
          nextQueue.push([x, y]);
        }
      }
    }
    // 防止最后一次，只有一个烂橘子，此时已经烂完了，结果还+1
    if (nextQueue.length > 0) {
      queue = nextQueue;
      result++;
    }
  }
  // 如果还存在新鲜的，那就是不可能
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return result;
};
