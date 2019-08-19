/*
 * @Author: KiyonamiYu 
 * @Date: 2019-08-19 21:00:27 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-08-19 21:57:31
 */

function Point(x, y) {
    this.x = x;
    this.y = y;
}

const digitSum = num => {
    let sum = 0;
    while(num != 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function movingCount(threshold, rows, cols) {
    if(rows <= 0 || cols <= 0 || threshold < 0) {
        return 0;
    }

    const visited = [];
    for(let i = 0; i < rows; i ++) {
        visited[i] = new Array(cols);
        visited[i].fill(0);
    }

    let result = 0;

    const queue = [];
    queue.push(new Point(0, 0));
    visited[0][0] = 1;
    
    while(queue.length !== 0) {
        const queueFront = queue.shift();
        result ++;

        const nextPoints = [];
        nextPoints[0] = new Point(queueFront.x + 1, queueFront.y);
        nextPoints[1] = new Point(queueFront.x - 1, queueFront.y);
        nextPoints[2] = new Point(queueFront.x, queueFront.y + 1);
        nextPoints[3] = new Point(queueFront.x, queueFront.y - 1);

        for(let point of nextPoints) {
            if((point.x >= 0 && point.x < cols) && (point.y >= 0 && point.y < rows) && !visited[point.y][point.x] && digitSum(point.x) + digitSum(point.y) <= threshold) {
                queue.push(new Point(point.x, point.y));
                visited[point.y][point.x] = 1;
            }
        }
    }
    return result;
}

// console.log(movingCount(5, 10, 10));